import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma/client";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Improved name validation - alphabetical characters only
const validateName = (name: string, fieldName: string) => {
  // Remove extra whitespace
  const cleanName = name.trim().replace(/\s+/g, " ");

  // Check minimum length
  if (cleanName.length < 2) {
    return {
      isValid: false,
      message: `${fieldName} must be at least 2 characters long.`,
    };
  }

  // Check maximum length
  if (cleanName.length > 30) {
    return {
      isValid: false,
      message: `${fieldName} must be less than 30 characters long.`,
    };
  }

  // Only allow alphabetical characters (letters only, no numbers, special characters, spaces)
  // Includes international characters for multilingual support
  const alphabetOnlyRegex = /^[a-zA-ZÀ-ÿŀ-žА-я\u0900-\u097F\u4e00-\u9fff]+$/u;
  if (!alphabetOnlyRegex.test(cleanName)) {
    return {
      isValid: false,
      message: `${fieldName} must contain only alphabetical characters (no numbers, spaces, or special characters).`,
    };
  }

  // Check if it contains at least one letter (not just special unicode)
  const hasLetter = /[a-zA-ZÀ-ÿŀ-žА-я\u0900-\u097F\u4e00-\u9fff]/.test(
    cleanName
  );
  if (!hasLetter) {
    return {
      isValid: false,
      message: `${fieldName} must contain valid alphabetical characters.`,
    };
  }

  // Check for patterns that might indicate invalid input
  const repeatedCharRegex = /(.)\1{4,}/; // More than 4 consecutive same characters
  if (repeatedCharRegex.test(cleanName)) {
    return {
      isValid: false,
      message: `${fieldName} contains too many repeated characters.`,
    };
  }

  // Basic inappropriate content check
  const inappropriateWords = [
    "test",
    "admin",
    "null",
    "undefined",
    "anonymous",
    "user",
    "name",
    "firstname",
    "lastname",
  ];
  const lowerName = cleanName.toLowerCase();
  if (
    inappropriateWords.some(
      (word) => lowerName === word || lowerName.includes(word)
    )
  ) {
    return {
      isValid: false,
      message: `Please enter a valid ${fieldName.toLowerCase()}.`,
    };
  }

  return {
    isValid: true,
    message: "Valid name.",
    cleanedValue: cleanName,
  };
};

// Phone validation function
const validatePhone = (phone: string) => {
  // Remove all non-digit characters
  const digitsOnly = phone.replace(/\D/g, "");

  // Check if it's a valid Nepal phone number
  // Nepal mobile: 98XXXXXXXX (10 digits starting with 98)
  // Nepal landline: Various formats but generally 7-8 digits with area codes

  if (digitsOnly.length < 7) {
    return {
      isValid: false,
      message: "Phone number is too short.",
    };
  }

  if (digitsOnly.length > 15) {
    return {
      isValid: false,
      message: "Phone number is too long.",
    };
  }

  // Nepal-specific validation
  if (digitsOnly.length === 10) {
    // Mobile number should start with 98
    if (!digitsOnly.startsWith("98")) {
      return {
        isValid: false,
        message: "Mobile number should start with 98.",
      };
    }
  } else if (digitsOnly.length === 7 || digitsOnly.length === 8) {
    // Landline numbers - basic validation
    if (digitsOnly.startsWith("0")) {
      return {
        isValid: false,
        message: "Invalid phone number format.",
      };
    }
  } else {
    return {
      isValid: false,
      message: "Invalid phone number length.",
    };
  }

  return {
    isValid: true,
    message: "Valid phone number.",
    cleanedValue: digitsOnly,
  };
};

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
    const { field, value } = req.body;

    if (!field || value === undefined || value === null) {
      return res
        .status(400)
        .json({ success: false, message: "Field and value are required." });
    }

    // Convert to string and trim
    const stringValue = String(value).trim();

    if (!stringValue) {
      return res
        .status(400)
        .json({ success: false, message: "Value cannot be empty." });
    }

    switch (field) {
      case "firstName": {
        const validation = validateName(stringValue, "First name");
        if (!validation.isValid) {
          return res.status(400).json({
            success: false,
            message: validation.message,
          });
        }
        break;
      }

      case "midName": {
        const validation = validateName(stringValue, "Middle name");
        if (!validation.isValid) {
          return res.status(400).json({
            success: false,
            message: validation.message,
          });
        }
        break;
      }

      case "lastName": {
        const validation = validateName(stringValue, "Last name");
        if (!validation.isValid) {
          return res.status(400).json({
            success: false,
            message: validation.message,
          });
        }
        break;
      }

      case "email": {
        if (!emailRegex.test(stringValue)) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid email address format." });
        }

        // Check email length
        if (stringValue.length > 254) {
          return res
            .status(400)
            .json({ success: false, message: "Email address is too long." });
        }
        break;
      }

      case "phone": {
        const validation = validatePhone(stringValue);
        if (!validation.isValid) {
          return res.status(400).json({
            success: false,
            message: validation.message,
          });
        }

        // const existingPhone = await prisma.lifeInsuranceQuote.findFirst({
        //   where: { phone: validation.cleanedValue },
        // });
        // if (existingPhone) {
        //   return res.status(409).json({
        //     success: false,
        //     message: "This phone number is already registered.",
        //   });
        // }
        break;
      }

      default:
        return res
          .status(400)
          .json({ success: false, message: "Unknown field for validation." });
    }

    return res.status(200).json({
      success: true,
      message: "Field validation passed.",
    });
  } catch (error: any) {
    console.error("Validation error:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred during validation.",
      ...(process.env.NODE_ENV === "development" && { error: error.message }),
    });
  }
}
