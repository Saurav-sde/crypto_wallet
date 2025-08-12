import React from 'react';
import { useNavigate } from 'react-router';
import phantomLogo from '../assets/logo.svg'; 

const WalletSetup = () => {
  const navigate = useNavigate();

  const handleCreateWallet = () => {
    navigate('/create-wallet');
  };

  const handleImportWallet = () => {
    navigate('/import-wallet');
  };

  return (
    // Main container to center the content on the page
    <div className="flex items-center justify-center h-screen bg-[#E2DFFE]">

      {/* Wallet Card */}
      <div className="w-full max-w-sm p-10 bg-gray-800 rounded-2xl shadow-lg">
        
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className='flex justify-center items-center'>
            <img 
            src={phantomLogo} 
            alt="Phantom Logo" 
            className="w-16 h-16 mb-6" 
            />
            <h2>Phantom</h2>
          </div>

          {/* Prompt Text */}
          <p className="text-white text-center text-md mb-8">
            To get started, create a new wallet or import an existing one.
          </p>

          {/* Action Buttons */}
          <div className="w-full">
            <button 
              onClick={handleCreateWallet}
              className="cursor-pointer w-full px-4 py-3 mb-4 font-bold text-white bg-[#4A87F2] rounded-lg hover:bg-[#3E78DB] focus:outline-none focus:ring-2  transition-colors duration-200"
            >
              Create a new wallet
            </button>
            <button 
              onClick={handleImportWallet}
              className="cursor-pointer w-full px-4 py-3 font-bold text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
            >
              I already have a wallet
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WalletSetup;