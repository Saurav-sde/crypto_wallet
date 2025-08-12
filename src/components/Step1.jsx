import React from 'react';

const SeamlessSetupIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg> );

const SecurityIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg> );

const RecoveryIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg> );

const Step1 = ({ onNext }) => {
  return (
    <>
      <div className="text-center mb-6">
        <div className="relative inline-block mb-4">
          <div className="w-40 h-24 bg-gradient-to-br from-purple-500 to-green-400 rounded-lg transform -rotate-6"></div>
          <div className="absolute top-0 left-0 w-40 h-24 bg-gray-800 rounded-lg flex items-center justify-between p-2 transform rotate-3 border border-gray-700">
            <div className="w-1/3 h-4 bg-purple-400 rounded"></div>
            <div className="w-1/3 h-4 bg-green-300 rounded"></div>
          </div>
          <span className="absolute top-[-10px] left-[-15px] text-2xl">✨</span>
        </div>
        <h1 className="text-2xl font-bold">Add a Wallet</h1>
      </div>

      <div className="space-y-6 mb-8">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0"><SeamlessSetupIcon /></div>
          <div>
            <h2 className="font-semibold">Seamless setup</h2>
            <p className="text-gray-400 text-sm">Create a wallet using a Google or Apple account and start exploring web3 with ease.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0"><SecurityIcon /></div>
          <div>
            <h2 className="font-semibold">Enhanced security</h2>
            <p className="text-gray-400 text-sm">Your wallet is stored securely and decentralized across multiple factors.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0"><RecoveryIcon /></div>
          <div>
            <h2 className="font-semibold">Easy recovery</h2>
            <p className="text-gray-400 text-sm">Recover access to your wallet with your Google or Apple account and a 4-digit PIN.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <button onClick={onNext} className="cursor-pointer bg-[#4A87F2] hover:bg-[#3E78DB] text-white font-bold py-3 px-4 rounded-full w-full">
          Create a seed phrase wallet
        </button>
        {/* <button onClick={onNext} className="cursor-pointer text-[#4A87F2] hover:text-[#3E78DB] font-bold py-2 px-4 rounded-full w-full">
          Continue with Email
        </button> */}
      </div>
    </>
  );
};

export default Step1;