import React from 'react';
import { CheckCircle, Shield, Users, Heart } from 'lucide-react';
import { chooseImageOne, chooseImageThree, chooseImageTwo, landingImage, landingSecondImage } from '@public/images';
import ChooseCard from '../Cards/ChooseCard';

function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-blue-100/50"></div>
        
        {/* Main hero content */}
        <div className="relative px-6 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smart Apps, Simple Purchase.
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            From creative tools to business essentials, we've got what you need.
          </p>
          
          {/* CTA Button */}
          <button className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </div>
        
        {/* Server room image representation */}
        <div className="relative mx-auto max-w-4xl">
            <div className='flex justify-center items-center h-64 sm:h-96'>
                <img src={landingImage.src} alt={landingImage.alt} className=" h-full object-cover" />
                {/* <img src={landingSecondImage.src} alt={landingSecondImage.alt} className="w-64 h-full object-cover" /> */}
            </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 text-sm text-gray-500 uppercase tracking-wider">
            WHY CHOOSE US?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            High-quality software tailored<br />to your needs
          </h2>
          
          {/* Product Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Expert Access Card */}
            <ChooseCard imageSrc={chooseImageOne.src} imageAlt={chooseImageOne.alt} title="Instant Access" />

            {/* Secure Payments Card */}
            <ChooseCard imageSrc={chooseImageTwo.src} imageAlt={chooseImageTwo.alt} title="Secure Payments" />

            {/* Dedicated Support Card */}
            <ChooseCard imageSrc={chooseImageThree.src} imageAlt={chooseImageThree.alt} title="Dedicated Support" />

          </div>

          
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Curated Quality */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <span className="text-gray-900 font-semibold">Curated Quality</span>
              </div>
              <p className="text-sm text-gray-600">
                Only top-rated, reliable software makes it to our platform.
              </p>
            </div>

            {/* Business & Personal */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gray-700 mr-2" />
                <span className="text-gray-900 font-semibold">Business & Personal</span>
              </div>
              <p className="text-sm text-gray-600">
                Tools for work and everyday life.
              </p>
            </div>

            {/* User-Friendly */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-pink-500 mr-2" />
                <span className="text-gray-900 font-semibold">User-Friendly</span>
              </div>
              <p className="text-sm text-gray-600">
                Easy to use, even for non-tech folks.
              </p>
            </div>

            {/* Trusted & Secure */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-500 mr-2" />
                <span className="text-gray-900 font-semibold">Trusted & Secure</span>
              </div>
              <p className="text-sm text-gray-600">
                Your data and purchases are always protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;