import React from 'react';
import { User, Mail, Lock, Sparkles } from 'lucide-react';

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01] flex flex-col lg:flex-row">

        {/* Left Section: Branding/Welcome Message */}
        <div className="relative lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-center items-center text-center lg:rounded-l-3xl rounded-t-3xl lg:rounded-tr-none">
          <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div> {/* Subtle background pattern */}
          <Sparkles size={64} className="text-white mb-6 animate-pulse" />
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Welcome Aboard!
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-6 max-w-sm">
            Create your account to unlock exclusive features and a seamless experience.
          </p>
          <p className="text-sm opacity-70">
            Already a member?{' '}
            <a href="#" className="font-semibold text-white hover:text-indigo-200 transition-colors duration-200 underline">
              Sign in here
            </a>
          </p>
        </div>

        {/* Right Section: Registration Form */}
        <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 bg-white lg:rounded-r-3xl rounded-b-3xl lg:rounded-bl-none">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Register Now
          </h3>
          <form className="space-y-6">
            {/* Full Name Input */}
            <div>
              <label htmlFor="fullName" className="sr-only">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={20} className="text-gray-400" />
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-600 focus:border-purple-600 transition-all duration-300 text-gray-900"
                  placeholder="Full Name"
                />
              </div>
            </div>

            {/* Email Address Input */}
            <div>
              <label htmlFor="email" className="sr-only">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-600 focus:border-purple-600 transition-all duration-300 text-gray-900"
                  placeholder="Email address"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-600 focus:border-purple-600 transition-all duration-300 text-gray-900"
                  placeholder="Password"
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-600 focus:border-purple-600 transition-all duration-300 text-gray-900"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            {/* Register Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
