import React from 'react';
import { Heart, TrendingUp, Shield, HelpCircle, Calendar } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Additional Information Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What is Life Insurance */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    What is a life insurance policy?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    A life insurance policy helps your family in the event of your passing. 
                    Your beneficiaries will receive money to use as they see fit in a difficult time.
                  </p>
                </div>
              </div>
            </div>

            {/* When to Get Life Insurance */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    When to get life insurance?
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Many people get a life insurance policy when they experience major life events, for example:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">If you were just married</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">You bought a new home</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">You're expecting a new baby</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Our Life Insurance?
          </h2>
          <p className="text-xl text-gray-600">
            We make life insurance simple, fast, and affordable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">No Medical Exams</h3>
            <p className="text-gray-600">
              Get coverage without needles, blood tests, or lengthy medical appointments. 
              Just answer a few health questions online.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Instant Approval</h3>
            <p className="text-gray-600">
              Get approved in minutes, not weeks. Our streamlined process means 
              you can have coverage the same day you apply.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Guaranteed Rates</h3>
            <p className="text-gray-600">
              Your premiums will never increase. Lock in your rate today and 
              keep it for life with our term life insurance policies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;