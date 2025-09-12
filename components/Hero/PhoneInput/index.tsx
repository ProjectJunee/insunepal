import React, { useState, useEffect } from "react";

const PhoneInput = ({ formData, handleInputChange }: any) => {
  const [isLandline, setIsLandline] = useState(false);
  const [validationError, setValidationError] = useState("");
  const [isValid, setIsValid] = useState(false);

  // More comprehensive mobile prefixes for Nepal
  const mobilePattern = /^(97[4-9]|98[0-6]|98[8]|96[1-2]|972)\d{7}$/;

  // Landline pattern for Nepal (area code + number = 8 digits total)
  const landlinePattern =
    /^0(1|2[1-9]|4[1-9]|5[1-9]|6[1-9]|7[1-9]|8[1-9]|9[1-9])\d{6}$/;

  // Validate phone number
  const validatePhone = (phone: string) => {
    if (!phone) {
      setValidationError("Phone number is required");
      setIsValid(false);
      return false;
    }

    const cleanPhone = phone.replace(/\s+/g, ""); // Remove spaces

    if (isLandline) {
      if (!landlinePattern.test(cleanPhone)) {
        setValidationError(
          "Enter a valid Nepali landline number (e.g., 014123456)"
        );
        setIsValid(false);
        return false;
      }
    } else {
      if (!mobilePattern.test(cleanPhone)) {
        setValidationError(
          "Enter a valid Nepali mobile number (e.g., 9812345678)"
        );
        setIsValid(false);
        return false;
      }
    }

    setValidationError("");
    setIsValid(true);
    return true;
  };

  // Handle input change with validation
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Only allow digits
    const cleanValue = value.replace(/[^\d]/g, "");

    // Limit length
    const maxLength = isLandline ? 9 : 10;
    const limitedValue = cleanValue.slice(0, maxLength);

    // Update the form data
    const syntheticEvent = {
      ...e,
      target: {
        ...e.target,
        value: limitedValue,
      },
    };

    handleInputChange(syntheticEvent);

    // Validate
    validatePhone(limitedValue);
  };

  // Re-validate when switching between mobile/landline
  useEffect(() => {
    if (formData.phone) {
      validatePhone(formData.phone);
    }
  }, [isLandline]);

  // Handle landline checkbox change
  const handleLandlineToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLandline(e.target.checked);
    // Clear the phone number when switching types
    const syntheticEvent = {
      target: {
        name: "phone",
        value: "",
      },
    };
    handleInputChange(syntheticEvent);
    setValidationError("");
    setIsValid(false);
  };

  const getPlaceholder = () => {
    return isLandline ? "014123456" : "9812345678";
  };

  const getHelperText = () => {
    if (isLandline) {
      return "Landline format: Area code + 6 digits (e.g., 01-4123456)";
    }
    return "Mobile format: 10 digits starting with 97/98/96/972";
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Phone Number <span className="text-red-500 ml-1">*</span>
      </label>

      {/* Checkbox for landline - moved above input */}
      <div className="mb-3 flex items-center space-x-2">
        <input
          id="isLandline"
          type="checkbox"
          checked={isLandline}
          onChange={handleLandlineToggle}
          className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
        />
        <label htmlFor="isLandline" className="text-sm text-gray-700">
          This is a landline number
        </label>
      </div>

      <input
        type="tel"
        name="phone"
        required
        value={formData.phone || ""}
        onChange={(e) => {
          const cleanValue = e.target.value.replace(/[^\d]/g, "");
          handleInputChange({
            target: { name: "phone", value: cleanValue },
          });
        }}
        onBlur={() => validatePhone(formData.phone)}
        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors ${
          validationError
            ? "border-red-300 focus:ring-red-500"
            : isValid
            ? "border-green-300 focus:ring-teal-500"
            : "border-gray-300 focus:ring-teal-500"
        }`}
        placeholder={getPlaceholder()}
        maxLength={isLandline ? 9 : 10}
      />

      {/* Helper text */}
      <p className="mt-1 text-xs text-gray-500">{getHelperText()}</p>

      {/* Validation message */}
      {validationError && (
        <p className="mt-1 text-sm text-red-600 flex items-center">
          <span className="mr-1">⚠</span>
          {validationError}
        </p>
      )}

      {/* Success message */}
      {isValid && !validationError && formData.phone && (
        <p className="mt-1 text-sm text-green-600 flex items-center">
          <span className="mr-1">✓</span>
          Valid {isLandline ? "landline" : "mobile"} number
        </p>
      )}
    </div>
  );
};

export default PhoneInput;
