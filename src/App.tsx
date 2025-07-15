import React, { useState } from 'react';
import { Eye, EyeOff, LogIn, Lock, Mail, ShieldCheck } from 'lucide-react';
import LoginForm from './components/LoginForm';
import ForgotPasswordModal from './components/ForgotPasswordModal';

function App() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex rounded-2xl shadow-2xl overflow-hidden bg-white">
        {/* Left side - Image */}
        <div className="hidden lg:block lg:w-1/2 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80')" }}>
        </div>
        
        {/* Right side - Login Form */}
        <div className="w-full lg:w-1/2 py-12 px-8 md:px-16">
          <div className="flex items-center justify-center mb-8">
            <ShieldCheck className="h-10 w-10 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800 ml-2">Login</h1>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Welcome back</h2>
          <p className="text-gray-500 mb-8">Please sign in to your account</p>
          
          <LoginForm onForgotPassword={() => setShowForgotPassword(true)} />
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">Don't have an account? 
              <a href="#" className="text-indigo-600 font-medium ml-1 hover:text-indigo-500 transition-colors">
                Sign up now
              </a>
            </p>
          </div>
          
          <div className="mt-12">
            <div className="flex items-center justify-center">
              <div className="h-px bg-gray-300 w-full"></div>
              <p className="text-sm text-gray-500 px-4">Or continue with</p>
              <div className="h-px bg-gray-300 w-full"></div>
            </div>
            
            <div className="flex justify-center space-x-4 mt-6">
              <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.79 15.71 17.57V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                  <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.71 17.57C14.73 18.23 13.48 18.63 12 18.63C9.19 18.63 6.8 16.69 5.95 14.1H2.27V16.94C4.08 20.47 7.76 23 12 23Z" fill="#34A853"/>
                  <path d="M5.95 14.1C5.75 13.47 5.63 12.8 5.63 12.11C5.63 11.42 5.75 10.75 5.95 10.12V7.28H2.27C1.57 8.7 1.18 10.28 1.18 11.94C1.18 13.6 1.57 15.18 2.27 16.6L5.95 14.1Z" fill="#FBBC05"/>
                  <path d="M12 5.58C13.62 5.58 15.06 6.16 16.17 7.21L19.28 4.1C17.46 2.42 14.97 1.44 12 1.44C7.76 1.44 4.08 3.97 2.27 7.5L5.95 10.34C6.8 7.75 9.19 5.58 12 5.58Z" fill="#EA4335"/>
                </svg>
              </button>
              <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#1877F2"/>
                </svg>
              </button>
              <button className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 hover:border-gray-400 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.084 4.126H5.117L17.083 19.77Z" fill="black"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {showForgotPassword && (
        <ForgotPasswordModal onClose={() => setShowForgotPassword(false)} />
      )}
    </div>
  );
}

export default App;
