import React from 'react';

export default function ManageSubscription() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-sm border border-gray-200">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-900 mb-1">Manage subscription</h1>
            <p className="text-sm text-gray-500">Unsubscribe or change your plan at any time.</p>
          </div>

          {/* Plan Card */}
          <div className="border border-gray-200 rounded-xl p-5 mb-6">
            {/* Plan Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-3">
                {/* Purple Hexagon Icon */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-10 h-10 text-purple-600"
                  >
                    <path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" />
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-white absolute"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Pro plan</h3>
                  <div className="mt-1 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Current plan
                  </div>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900">$12.00</span>
                <span className="text-gray-500 text-sm">/ month</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Advanced features for individuals and teams.</p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {[
                'Unlimited projects',
                'Priority support',
                'Advanced analytics',
                'Custom domains'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      viewBox="0 0 12 12"
                      className="w-3 h-3 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="10 3 4.5 9 2 6.5" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Method Card */}
          <div className="border border-gray-200 rounded-xl p-4 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                {/* Visa Icon */}
                <div className="border border-gray-200 rounded px-1.5 py-1 flex items-center justify-center bg-white h-8 w-12">
                   <span className="font-bold italic text-blue-900 text-sm leading-none">VISA</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Visa ending in 4242</p>
                  <p className="text-xs text-gray-500 mt-0.5">Next billing date: August 1, 2024</p>
                </div>
              </div>
              <button className="text-xs font-medium text-gray-700 border border-gray-300 rounded-md px-3 py-1.5 hover:bg-gray-50 transition-colors">
                Update
              </button>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between">
            <button className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
              Cancel subscription
            </button>
            <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors shadow-sm">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}