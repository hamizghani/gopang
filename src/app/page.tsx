'use client';

import React, { useState } from 'react';
import { Leaf, Recycle, Package, Users, Camera, Weight, ArrowRight, CheckCircle2, Truck, Home, Info, ShoppingBag } from 'lucide-react';
import { LucideIcon } from "lucide-react"

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
}


// Navigation Component
const Navbar = ({ currentPage, onNavigate }: NavbarProps) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'collect', icon: Recycle, label: 'Collect' },
    { id: 'process', icon: Package, label: 'Process' },
    { id: 'products', icon: ShoppingBag, label: 'Products' },
    { id: 'about', icon: Info, label: 'About' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 shadow-lg z-50 max-w-md mx-auto">
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`flex flex-col items-center justify-center flex-1 py-2 transition-colors ${
              currentPage === id ? 'text-green-600' : 'text-gray-400'
            }`}
          >
            <Icon size={20} />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gradient-to-b from-green-50 to-green-100 py-8 px-6 text-center">
    <div className="flex items-center justify-center mb-2">
      <Leaf className="text-green-600 mr-2" size={20} />
      <span className="text-sm font-semibold text-green-800">Gopang</span>
    </div>
    <p className="text-xs text-green-700 italic">
      "Empowering communities, one waste at a time."
    </p>
  </footer>
);

interface ProcessCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isActive?: boolean;
} 

// Process Card Component
const ProcessCard = ({ icon: Icon, title, description, isActive }: ProcessCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 rounded-xl">
      <Icon className={`w-6 h-6 ${isActive ? "text-gopang-green" : "text-gray-400"}`} />
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

// Product Card Component
interface ProductCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

const ProductCard = ({ name, description, icon: Icon }: ProductCardProps) => (
  <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition">
    <div className="bg-gradient-to-br from-green-50 to-brown-50 rounded-full p-3 mb-3">
      <Icon className="text-gopang-green" size={32} />
    </div>
    <h3 className="font-semibold text-gray-800 mb-1">{name}</h3>
    <p className="text-xs text-gray-600">{description}</p>
  </div>
);


interface LandingPageProps {
  onNavigate: (page: string) => void;
}
// Landing Page
const LandingPage = ({ onNavigate }: LandingPageProps) => (
  <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 pb-20">
    {/* Header */}
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 pt-8 pb-12 rounded-b-3xl shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <Leaf size={32} className="mr-2" />
        <h1 className="text-2xl font-bold">Gopang</h1>
      </div>
      <p className="text-sm text-center text-green-100">Gotong Pangan</p>
    </div>

    {/* Hero Section */}
    <div className="px-6 -mt-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
          "From Our Waste,<br />For Our Future."
        </h2>
        <p className="text-sm text-gray-600 text-center leading-relaxed">
          Transform your food waste into valuable resources through sustainable Black Soldier Fly processing. Join us in building a circular economy for a greener tomorrow.
        </p>
      </div>

      {/* Process Illustration */}
      <div className="bg-gradient-to-br from-green-50 to-brown-50 rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">How It Works</h3>
        <div className="space-y-3">
          {[
            { icon: Recycle, text: 'Collect Food Waste' },
            { icon: Weight, text: 'Record & Weigh' },
            { icon: Package, text: 'BSF Processing' },
            { icon: ShoppingBag, text: 'Create Products' },
            { icon: Truck, text: 'Distribution & Sales' }
          ].map((step, idx) => (
            <div key={idx} className="flex items-center bg-white rounded-xl p-3 shadow-sm">
              <div className="bg-green-100 rounded-full p-2 mr-3">
                <step.icon className="text-green-600" size={20} />
              </div>
              <span className="text-sm font-medium text-gray-700">{step.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => onNavigate('collect')}
        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
      >
        Get Started
        <ArrowRight className="ml-2" size={20} />
      </button>
    </div>
  </div>
);

// Food Waste Collection Page
const CollectPage = () => {
  const [formData, setFormData] = useState({
    foodType: '',
    weight: '',
    photo: null
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-green-600 pb-20">
      <div className="px-6 pt-8">
        <h1 className="text-2xl font-bold text-white mb-2">Collect Waste</h1>
        <p className="text-sm text-green-50 mb-6">Record your food waste contribution</p>

        <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4">
          {/* Food Type Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Food Type
            </label>
            <select
              className="w-full px-4 py-3 bg-green-50 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.foodType}
              onChange={(e) => setFormData({ ...formData, foodType: e.target.value })}
            >
              <option value="">Select type...</option>
              <option value="vegetable">Vegetable Scraps</option>
              <option value="fruit">Fruit Waste</option>
              <option value="rice">Rice & Grains</option>
              <option value="mixed">Mixed Food</option>
            </select>
          </div>

          {/* Weight Input */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              placeholder="Enter weight"
              className="w-full px-4 py-3 bg-green-50 border border-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.weight}
              onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
            />
          </div>

          {/* Photo Upload Placeholder */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Photo (Optional)
            </label>
            <div className="border-2 border-dashed border-green-300 rounded-xl p-8 text-center bg-green-50 hover:bg-green-100 transition-colors cursor-pointer">
              <Camera className="mx-auto text-green-600 mb-2" size={32} />
              <p className="text-sm text-gray-600">Tap to upload photo</p>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all mt-6 flex items-center justify-center">
            <CheckCircle2 className="mr-2" size={20} />
            Submit Waste Record
          </button>
        </div>
      </div>
    </div>
  );
};

// BSF Process Page
const ProcessPage = () => {
  const [activeStep, setActiveStep] = useState(2); // Show step 3 as active for demo

  const steps = [
    { icon: Recycle, title: 'Collection', description: 'Waste gathered' },
    { icon: Weight, title: 'Weighing', description: 'Measured accurately' },
    { icon: Package, title: 'Processing', description: 'BSF transformation' },
    { icon: ShoppingBag, title: 'Product Creation', description: 'Quality outputs' },
    { icon: Truck, title: 'Distribution', description: 'Ready for market' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-brown-50 to-green-50 pb-20">
      <div className="px-6 pt-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">BSF Process</h1>
        <p className="text-sm text-gray-600 mb-6">Track the transformation journey</p>

        {/* Progress Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            {steps.map((_, idx) => (
              <div key={idx} className="flex-1 flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  idx <= activeStep ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-400'
                }`}>
                  {idx < activeStep ? <CheckCircle2 size={16} /> : idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-1 ${
                    idx < activeStep ? 'bg-green-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-sm font-semibold text-green-600">
            Step {activeStep + 1} of {steps.length}
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-2 gap-4">
          {steps.map((step, idx) => (
            <ProcessCard
              key={idx}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isActive={idx === activeStep}
            />
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-br from-green-100 to-brown-100 rounded-2xl p-5 mt-6">
          <h3 className="font-semibold text-gray-800 mb-2">Current Stage: Processing</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Black Soldier Fly larvae are actively breaking down organic waste into nutrient-rich biomass. This process typically takes 10-14 days.
          </p>
        </div>
      </div>
    </div>
  );
};

// Products Page
const ProductsPage = () => {
  const products = [
    { name: 'Organic Fertilizer', description: 'Nutrient-rich soil amendment from BSF frass', icon: Leaf },
    { name: 'Animal Feed', description: 'High-protein feed from BSF larvae', icon: Package },
    { name: 'Premium Compost', description: 'Aged compost for gardens', icon: Recycle },
    { name: 'Soil Enhancer', description: 'Boost soil health naturally', icon: Leaf }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-20">
      <div className="px-6 pt-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Our Products</h1>
        <p className="text-sm text-gray-600 mb-6">Sustainable outputs from waste transformation</p>

        <div className="grid grid-cols-2 gap-4">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 mt-6 text-white">
          <h3 className="font-semibold mb-2">100% Natural</h3>
          <p className="text-sm text-green-50 leading-relaxed">
            All our products are created through natural biological processes, free from harmful chemicals.
          </p>
        </div>
      </div>
    </div>
  );
};

// About Page
const AboutPage = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-green-50 pb-20">
    <div className="px-6 pt-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">About Gopang</h1>

      {/* Mission Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 rounded-full p-3 mr-3">
            <Users className="text-green-600" size={24} />
          </div>
          <h2 className="text-lg font-semibold text-gray-800">What is Gotong Pangan?</h2>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          Gopang (Gotong Pangan) is a community-driven initiative that transforms food waste into valuable resources through Black Soldier Fly (BSF) bioconversion. We believe in the power of collective action to create sustainable solutions for waste management.
        </p>
      </div>

      {/* Circular Economy Card */}
      <div className="bg-gradient-to-br from-green-50 to-brown-50 rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Circular Economy</h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          We promote a circular economy where waste becomes a resource. By converting organic waste into high-value products like fertilizer and animal feed, we close the loop and reduce environmental impact.
        </p>
        <div className="flex items-center justify-center">
          <Recycle className="text-green-600" size={48} />
        </div>
      </div>

      {/* Community Impact */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Community Collaboration</h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Together, we're building a network of conscious citizens who understand that every piece of food waste is an opportunity. Through education, participation, and shared benefits, we create lasting change.
        </p>
      </div>

      <Footer />
    </div>
  </div>
);

// Main App Component
export default function GopangApp() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'collect':
        return <CollectPage />;
      case 'process':
        return <ProcessPage />;
      case 'products':
        return <ProductsPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen relative">
      {renderPage()}
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
    </div>
  );
}