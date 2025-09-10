import React, { useState } from "react";
import { User, Shield, Heart, Star, TrendingUp } from "lucide-react";
import PhoneInput from "./PhoneInput";
import Dialog from "@/components/Common/Dialog";
import Features from "@/components/Hero/Features";
import { NP_DISTRICTS } from "@/constants/districts";

const TextField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  ...props
}: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {label}
      {required && " *"}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
      {...props}
    />
  </div>
);

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">
      {label}
      {required && " *"}
    </label>
    <select
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors">
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((opt: any, i: any) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

const RadioGroup = ({ label, name, options, value, onChange }: any) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} *
    </label>
    <div className="grid grid-cols-3 gap-3">
      {options.map((opt: any) => (
        <label key={opt.value} className="relative">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={onChange}
            className="sr-only"
          />
          <div
            className={`p-3 rounded-lg border-2 cursor-pointer text-center transition-all text-sm ${
              value === opt.value
                ? "border-teal-500 bg-teal-50 text-teal-700"
                : "border-gray-300 hover:border-gray-400"
            }`}>
            {opt.label}
          </div>
        </label>
      ))}
    </div>
  </div>
);

interface FormData {
  [key: string]: string;
  district: string;
  dateOfBirth: string;
  gender: string;
  coverageAmount: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
}

const LifeInsuranceQuote = () => {
  const [formData, setFormData] = useState<FormData>({
    district: "",
    dateOfBirth: "",
    gender: "",
    coverageAmount: "500000",
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dialog, setDialog] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
    type: "success" | "error" | "warning" | "info";
  }>({
    isOpen: false,
    title: "",
    message: "",
    type: "info",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showDialog = (
    title: string,
    message: string,
    type: "success" | "error" | "warning" | "info" = "info"
  ) => {
    setDialog({
      isOpen: true,
      title,
      message,
      type,
    });
  };

  const closeDialog = () => {
    setDialog((prev) => ({ ...prev, isOpen: false }));
  };

  const handleSubmit = () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "district",
      "phone",
      "dateOfBirth",
      "gender",
      "email",
    ];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      showDialog(
        "Missing Required Fields",
        "Please fill in all required fields before submitting your quote request.",
        "warning"
      );
      return;
    }

    setIsSubmitted(true);
    console.log("Submitted");
    console.log(formData);

    setTimeout(() => {
      setIsSubmitted(false);
      showDialog(
        "Quote Request Submitted!",
        "Thank you for your interest! You'll receive your personalized life insurance quote via email within 24 hours.",
        "success"
      );
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50">
      {/* Compact Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - More Compact */}
            <div className="text-white">
              <div className="mb-6 flex justify-center lg:justify-start">
                <img
                  src="family.svg"
                  alt="Happy family"
                  className="w-48 opacity-90 hover:opacity-100 transition"
                />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Protect Your Family's Future
                <span className="block text-teal-200">
                  in Minutes, Not Hours
                </span>
              </h1>
              <p className="text-lg mb-6 text-teal-100">
                Get instant life insurance quotes with no medical exams
                required. Coverage starting at just Rs 1000/month.
              </p>

              {/* Compact Benefits Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  {
                    icon: <Heart className="w-4 h-4 text-red-400" />,
                    text: "No medical exams",
                  },
                  {
                    icon: <TrendingUp className="w-4 h-4 text-green-400" />,
                    text: "Instant approval",
                  },
                  {
                    icon: <Shield className="w-4 h-4 text-blue-400" />,
                    text: "Up to Rs 500,000",
                  },
                  {
                    icon: <User className="w-4 h-4 text-purple-400" />,
                    text: "Ages 18-65",
                  },
                ].map((b, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    {b.icon}
                    <span className="text-sm">{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Compact Rating */}
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span>4.8/5 (2600+ reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="w-4 h-4 text-teal-200" />
                  <span>A+ Rating</span>
                </div>
              </div>
            </div>

            {/* Right - Compact Form */}
            <div className="bg-white rounded-xl shadow-2xl p-6">
              <div className="text-center mb-5">
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  Get Your Free Quote
                </h2>
                <p className="text-sm text-gray-600">
                  Takes less than 2 minutes • No spam, guaranteed
                </p>
              </div>

              <div className="space-y-4">
                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <TextField
                    label="First Name"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="John"
                  />
                  <TextField
                    label="Last Name"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Smith"
                  />
                </div>

                {/* District and Phone */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <SelectField
                    label="District"
                    name="district"
                    required
                    value={formData.district}
                    onChange={handleInputChange}
                    options={NP_DISTRICTS}
                  />
                  <PhoneInput
                    formData={formData}
                    handleInputChange={handleInputChange}
                  />
                </div>

                {/* Birth Year */}
                <TextField
                  label="Year of Birth"
                  name="dateOfBirth"
                  type="number"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  min="1900"
                  max={new Date().getFullYear()}
                  placeholder="e.g. 1995"
                />

                {/* Gender */}
                <RadioGroup
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  options={[
                    { label: "Female", value: "female" },
                    { label: "Male", value: "male" },
                    { label: "Other", value: "other" },
                  ]}
                />

                {/* Email */}
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="john@example.com"
                />

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    isSubmitted
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-teal-600 hover:bg-teal-700 hover:shadow-lg transform hover:scale-105"
                  } text-white`}>
                  {isSubmitted ? "Processing..." : "Get My Free Quote"}
                </button>
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By clicking "Get My Free Quote", you agree to our Terms of
                  Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Features />

      {/* Dialog Component */}
      <Dialog
        isOpen={dialog.isOpen}
        onClose={closeDialog}
        title={dialog.title}
        message={dialog.message}
        type={dialog.type}
        confirmText="OK"
      />
    </div>
  );
};

export default LifeInsuranceQuote;
