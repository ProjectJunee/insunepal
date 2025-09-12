import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ success: false, message: `Method ${req.method} Not Allowed` });
  }

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

    // minimal sanity check before inserting
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
}
