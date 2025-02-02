import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-white-theme my-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to <span className="font-semibold text-blue-500">Buymaterialz.com</span>, your trusted B2B platform transforming the construction materials industry. We connect dealers, distributors, and contractors, streamlining the supply chain to save time, reduce costs, and boost growth.
        </p>

        <div className="space-y-8">
          <h3 className="text-3xl font-semibold text-gray-800">Our Mission</h3>
          <p className="text-lg text-gray-600">
            We simplify the construction supply chain through technology, helping manufacturers cut employee costs and providing dealers and distributors with easy access to quality materials at competitive prices.
          </p>
        </div>

        <div className="space-y-8 mt-12">
          <h3 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h3>
          <ul className="text-lg text-gray-600 space-y-4">
            <li>- <strong>Cost-Effective Solutions:</strong> Reduce operational costs with direct access to a wide network of buyers and sellers.</li>
            <li>- <strong>Efficiency & Transparency:</strong> Simplified processes, real-time tracking, and competitive pricing ensure smooth transactions.</li>
            <li>- <strong>Tech-Driven Insights:</strong> Leverage advanced analytics to forecast demand and make informed decisions.</li>
          </ul>
        </div>

        <div className="mt-12 text-lg text-gray-600">
          <p>
            Join <span className="font-semibold text-blue-500">Buymaterialz.com</span> and experience a smarter, faster way to grow your business. Together, we build success—one material at a time.
          </p>
        </div>
      </div>
    </div>
  );
};
