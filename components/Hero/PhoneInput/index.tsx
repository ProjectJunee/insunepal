import React, { useState } from "react";

const PhoneInput = ({ formData, handleInputChange }: any) => {
  const [isLandline, setIsLandline] = useState(false);

  const mobilePattern = "^(97|98)\\d{8}$";
  const landlinePattern = "^0\\d{6,7}$";

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Phone Number *
      </label>
      <input
        type="tel"
        name="phone"
        required
        value={formData.phone || ""}
        onChange={handleInputChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
        placeholder={isLandline ? "e.g. 014123456" : "e.g. 9812345678"}
        pattern={isLandline ? landlinePattern : mobilePattern}
        title={
          isLandline
            ? "Enter a valid Nepali landline number starting with 0 (7–8 digits)"
            : "Enter a valid Nepali mobile number starting with 97 or 98 (10 digits)"
        }
      />

      {/* Checkbox for landline */}
      <div className="mt-2 flex items-center space-x-2">
        <input
          id="isLandline"
          type="checkbox"
          checked={isLandline}
          onChange={(e) => setIsLandline(e.target.checked)}
          className="h-4 w-4 text-teal-600 border-gray-300 rounded"
        />
        <label htmlFor="isLandline" className="text-sm text-gray-700">
          This is a landline number
        </label>
      </div>
    </div>
  );
};

export default PhoneInput;
