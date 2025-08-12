import bcrypt from 'bcryptjs';
import React, { useState, useEffect } from 'react';

// const CheckIcon = () => (
//     <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//     </svg>
// );


const Step2 = ({ onNext }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [strength, setStrength] = useState({ level: '', color: 'text-gray-500', width: 'w-0' });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
//   const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // This effect checks the password strength whenever the password changes
  useEffect(() => {
    const checkStrength = () => {
      let score = 0;
      if (password.length >= 8) score++;
      if (password.length > 12) score++;
      if (/[A-Z]/.test(password)) score++;
      if (/[0-9]/.test(password)) score++;
      if (/[^A-Za-z0-9]/.test(password)) score++;

      if (score < 3) {
        setStrength({ level: 'Weak', color: 'bg-red-500', width: 'w-1/3' });
      } else if (score < 5) {
        setStrength({ level: 'Medium', color: 'bg-yellow-500', width: 'w-2/3' });
      } else {
        setStrength({ level: 'Strong', color: 'bg-green-500', width: 'w-full' });
      }
    };
    
    if(password){
        checkStrength();
    } else {
        setStrength({ level: '', color: '', width: 'w-0' });
    }
  }, [password]);

  // This effect checks if the passwords match whenever either field changes
  useEffect(() => {
    setPasswordsMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const handleContinue = async() => {
    if (isButtonDisabled) {
        return;
    }
    
    // hash and save the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    localStorage.setItem('walletPassword', hashedPassword);
    console.log("Password saved to localStorage (as Base64).");
    
    // setShowSuccessPopup(true);
    onNext();
  };

//   const handleProceed = () => {
//       onNext();
//   }
  
  // Determine if the Continue button should be disabled
  const isButtonDisabled = !password || !passwordsMatch || strength.level === 'Weak' || !agreedToTerms;

  return (
    <div className="flex flex-col">
      <div className="text-left mb-6">
        <h1 className="text-2xl font-bold">Create a password</h1>
        <p className="text-gray-400 mt-1">You will use this to unlock your wallet.</p>
      </div>

      <div className="space-y-4">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="bg-black border border-gray-500 rounded-lg w-full p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className={`bg-black border border-gray-500 rounded-lg w-full p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 ${passwordsMatch ? 'focus:ring-blue-500' : ' focus:ring-red-500'}`}
          />
           {!passwordsMatch && confirmPassword && (
             <p className="text-red-500 text-xs mt-1">Passwords do not match.</p>
           )}
        </div>
      </div>
      
      {/* Password Strength Indicator */}
      {password && (
        <div className="flex items-center space-x-2 mt-2">
            <div className="w-full bg-gray-700 rounded-full h-1.5">
                <div className={`h-1.5 rounded-full ${strength.color} ${strength.width} transition-all duration-300`}></div>
            </div>
            <span className={`text-sm font-semibold ${strength.level === 'Weak' ? 'text-red-500' : strength.level === 'Medium' ? 'text-yellow-500' : 'text-green-500'}`}>
                {strength.level}
            </span>
        </div>
      )}

      {/* Terms of Service Checkbox */}
      <div className="flex items-center mt-6">
        <input
          type="checkbox"
          id="terms"
          checked={agreedToTerms}
          onChange={(e) => setAgreedToTerms(e.target.checked)}
          className="w-4 h-4 text-blue-400 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
        />
        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-300">
          I agree to the <a href="#" className="text-blue-400 hover:underline">Terms of Service</a>
        </label>
      </div>

      {/* Continue Button */}
      <button
        onClick={handleContinue}
        disabled={isButtonDisabled}
        className="cursor-pointer mt-6 w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-full transition-colors
                   disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed
                   hover:enabled:bg-blue-600 duration-200"
      >
        Continue
      </button>

    {/* {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1C1C1E] rounded-2xl p-8 text-center max-w-sm w-full border border-gray-700 shadow-xl">
            <CheckIcon />
            <h2 className="text-2xl font-bold mt-4">Password Created</h2>
            <p className="text-gray-400 mt-2">Your password has been set up securely.</p>
            <button
              onClick={handleProceed}
              className="mt-6 w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-full hover:bg-purple-700 transition-colors"
              >
              Proceed
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Step2;