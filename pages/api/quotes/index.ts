// pages/api/quotes.ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma/client";

// simple regex for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const {
        firstName,
        lastName,
        district,
        phone,
        dateOfBirth,
        gender,
        email,
        coverageAmount,
      } = req.body;

      // ---------- VALIDATIONS ----------
      if (
        !firstName ||
        !lastName ||
        !district ||
        !phone ||
        !dateOfBirth ||
        !gender ||
        !email
      ) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields.",
        });
      }

      // firstName & lastName must be >= 4 characters
      if (firstName.length < 4 || lastName.length < 4) {
        return res.status(400).json({
          success: false,
          message:
            "First name and last name must be at least 4 characters long.",
        });
      }

      // validate email format
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email address.",
        });
      }

      // check duplicate email
      const existingEmail = await prisma.lifeInsuranceQuote.findUnique({
        where: { email },
      });
      if (existingEmail) {
        return res.status(409).json({
          success: false,
          message: "Email already exists.",
        });
      }

      // check duplicate phone
      const existingPhone = await prisma.lifeInsuranceQuote.findFirst({
        where: { phone },
      });
      if (existingPhone) {
        return res.status(409).json({
          success: false,
          message: "Phone number already exists.",
        });
      }

      // ---------- CREATE NEW QUOTE ----------
      const quote = await prisma.lifeInsuranceQuote.create({
        data: {
          firstName,
          lastName,
          district,
          phone,
          dateOfBirth: Number(dateOfBirth),
          gender,
          email,
          coverageAmount: coverageAmount ? Number(coverageAmount) : 500000,
        },
      });

      return res.status(201).json({
        success: true,
        message: "Quote request submitted successfully.",
        data: quote,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong.",
        error: error.message,
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`,
    });
  }
}
