import React, { useState } from 'react';
import { User, Shield, Heart, Star, TrendingUp } from 'lucide-react';
import Features from './Features';

const LifeInsuranceQuote = () => {
  const [formData, setFormData] = useState({
    zipCode: '',
    dateOfBirth: '',
    gender: '',
    coverageAmount: '500000',
    email: '',
    firstName: '',
    lastName: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.lastName || !formData.zipCode || !formData.dateOfBirth || !formData.gender || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(false);
      alert('Quote request submitted! You will receive your personalized quote via email within 24 hours.');
    }, 2000);
  };

  const calculateAge = (birthDate: string) => {
    if (!birthDate) return 0;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const getEstimatedPremium = () => {
    const age = calculateAge(formData.dateOfBirth);
    const coverage = parseInt(formData.coverageAmount);
    const genderMultiplier = formData.gender === 'female' ? 0.9 : 1.0;
    
    if (age < 25) return Math.round((coverage / 100000) * 15 * genderMultiplier);
    if (age < 35) return Math.round((coverage / 100000) * 20 * genderMultiplier);
    if (age < 45) return Math.round((coverage / 100000) * 30 * genderMultiplier);
    if (age < 55) return Math.round((coverage / 100000) * 50 * genderMultiplier);
    return Math.round((coverage / 100000) * 80 * genderMultiplier);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Family Image */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <img 
                  src="/family.svg" 
                  alt="Happy family illustration" 
                  className="w-64 h-auto max-w-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Protect Your Family's Future
                <span className="block text-teal-200">in Minutes, Not Hours</span>
              </h1>
              <p className="text-xl mb-8 text-teal-100">
                Get instant life insurance quotes with no medical exams required. 
                Secure your family's financial future with coverage starting at just Rs 1000/month.
              </p>
              
              {/* Trust Indicators */}
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

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-sm">No medical exams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Instant approval</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="text-sm">Up to Rs 500,000 coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">Ages 18-65</span>
                </div>
              </div>
            </div>

            {/* Right - Quote Form */}
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
                {/* Personal Information */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                {/* ZIP and Date of Birth */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                      placeholder="12345"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Gender *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className="relative">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg border-2 cursor-pointer transition-all text-center ${
                        formData.gender === 'female'
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}>
                        Female
                      </div>
                    </label>
                    <label className="relative">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg border-2 cursor-pointer transition-all text-center ${
                        formData.gender === 'male'
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}>
                        Male
                      </div>
                    </label>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Estimated Premium Display */}
                {formData.dateOfBirth && formData.gender && (
                  <div className="bg-gradient-to-r from-teal-50 to-green-50 p-4 rounded-lg border border-teal-200">
                    <div className="text-center">
                      <p className="text-sm text-gray-600 mb-1">Estimated Monthly Premium</p>
                      <p className="text-3xl font-bold text-teal-600">
                        ${getEstimatedPremium()}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        *Estimate based on age and coverage. Final rates may vary.
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                    isSubmitted
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-teal-600 hover:bg-teal-700 hover:shadow-lg transform hover:scale-105'
                  } text-white`}
                >
                  {isSubmitted ? 'Processing...' : 'Get My Free Quote'}
                </button>

                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  By clicking "Get My Free Quote", you agree to our Terms of Service and Privacy Policy. 
                  We will never sell your information or spam you.
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