// src/components/WalletOnboarding.js

import React, { useState } from 'react';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';
import Step4 from '../components/Step4';

// --- Icon for the Back Arrow ---
const BackArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </svg>
);


const WalletOnboarding = () => {
  // State to track the current active step, starting at 1
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };
  
  // Renders the correct step component based on the currentStep state
  const renderStep = () => {
    switch(currentStep) {
        case 1:
            return <Step1 onNext={handleNext} />;
        case 2:
            return <Step2 onNext={handleNext} onPrev={handlePrev} />;
        case 3:
            return <Step3 onNext={handleNext} onPrev={handlePrev} />;
        case 4:
            return <Step4 />;
        default:
            return <Step1 onNext={handleNext} />;
    }
  }

  return (
    <div className="bg-[#E2DFFE] min-h-screen flex items-center justify-center p-4">
      <div className="bg-[#1C1C1E] text-white rounded-2xl p-6 max-w-sm w-full font-sans">
        
        {/* Header: Back arrow and Progress Dots */}
        <div className="flex justify-between items-center mb-6 h-6">
          {currentStep > 1 && currentStep < totalSteps ? (
            <button onClick={handlePrev} className="text-gray-300 font-bold cursor-pointer hover:text-gray-100">
              <BackArrowIcon />
            </button>
          ) : (
            <div className="w-6" /> // Spacer
          )}
          
          <div className="flex space-x-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  currentStep === index + 1 ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          <div className="w-6" /> {/* Spacer */}
        </div>
        
        {/* Dynamic Content: The current step is rendered here */}
        <div className="mt-6">
            {renderStep()}
        </div>

      </div>
    </div>
  );
};

export default WalletOnboarding;