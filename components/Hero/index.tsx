import React, { useState } from "react";
import { User, Shield, Heart, Star, TrendingUp } from "lucide-react";
import Features from "./Features";
import { NP_DISTRICTS } from "@/constants/districts";
import PhoneInput from "./PhoneInput";

/* ========================
   Reusable Input Components
   ======================== */
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
    <label className="block text-sm font-medium text-gray-700 mb-2">
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
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
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
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
      {required && " *"}
    </label>
    <select
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors">
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
    <label className="block text-sm font-medium text-gray-700 mb-3">
      {label} *
    </label>
    <div className="grid grid-cols-2 gap-4">
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
            className={`p-4 rounded-lg border-2 cursor-pointer text-center transition-all ${
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

const PremiumBox = ({ premium }: any) => (
  <div className="bg-gradient-to-r from-teal-50 to-green-50 p-4 rounded-lg border border-teal-200 text-center">
    <p className="text-sm text-gray-600 mb-1">Estimated Monthly Premium</p>
    <p className="text-3xl font-bold text-teal-600">Rs {premium}</p>
    <p className="text-xs text-gray-500 mt-1">
      *Estimate based on age & coverage. Final rates may vary.
    </p>
  </div>
);

/* ========================
   Main Component
   ======================== */
const LifeInsuranceQuote = () => {
  const [formData, setFormData] = useState({
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (Object.values(formData).some((v) => !v)) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      alert(
        "Quote request submitted! You’ll receive it via email within 24 hours."
      );
    }, 2000);
  };

  const calculateAge = (birthYear: string) =>
    birthYear ? new Date().getFullYear() - parseInt(birthYear, 10) : 0;

  const getEstimatedPremium = () => {
    const age = calculateAge(formData.dateOfBirth);
    const coverage = parseInt(formData.coverageAmount);
    const genderMultiplier = formData.gender === "female" ? 0.9 : 1;
    const multipliers = [15, 20, 30, 50, 80];
    const ageBrackets = [25, 35, 45, 55];
    const multiplier =
      multipliers[ageBrackets.findIndex((a) => age < a)] ?? multipliers.at(-1)!;
    return Math.round((coverage / 100000) * multiplier * genderMultiplier);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <div className="text-white">
              <div className="mb-8 flex justify-center lg:justify-start">
                <img
                  src="/family.svg"
                  alt="Happy family"
                  className="w-64 opacity-90 hover:opacity-100 transition"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Protect Your Family's Future
                <span className="block text-teal-200">
                  in Minutes, Not Hours
                </span>
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Get instant life insurance quotes with no medical exams
                required. Coverage starting at just Rs 1000/month.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm">4.8/5 (2600+ reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-teal-200" />
                  <span className="text-sm">A+ Rating</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Heart className="w-5 h-5 text-red-400" />,
                    text: "No medical exams",
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5 text-green-400" />,
                    text: "Instant approval",
                  },
                  {
                    icon: <Shield className="w-5 h-5 text-blue-400" />,
                    text: "Up to Rs 500,000 coverage",
                  },
                  {
                    icon: <User className="w-5 h-5 text-purple-400" />,
                    text: "Ages 18-65",
                  },
                ].map((b, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    {b.icon}
                    <span className="text-sm">{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Free Quote
                </h2>
                <p className="text-gray-600">
                  Takes less than 2 minutes • No spam, guaranteed
                </p>
              </div>

              <div className="space-y-6">
                {/* Name */}
                <div className="grid sm:grid-cols-2 gap-4">
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

                {/* District, Phone, DOB */}
                <div className="grid sm:grid-cols-2 gap-4">
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
                </div>

                {/* Gender */}
                <RadioGroup
                  label="Gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  options={[
                    { label: "Female", value: "female" },
                    { label: "Male", value: "male" },
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

                {/* Premium */}
                {formData.dateOfBirth && formData.gender && (
                  <PremiumBox premium={getEstimatedPremium()} />
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                    isSubmitted
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-teal-600 hover:bg-teal-700 hover:shadow-lg transform hover:scale-105"
                  } text-white`}>
                  {isSubmitted ? "Processing..." : "Get My Free Quote"}
                </button>
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By clicking "Get My Free Quote", you agree to our Terms of
                  Service and Privacy Policy. We will never sell your
                  information or spam you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
    </div>
  );
};

export default LifeInsuranceQuote;
