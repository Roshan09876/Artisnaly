import React from 'react';
import { Mail, Lock, Sparkles } from 'lucide-react';

const Login = () => { 
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 to-purple-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-4xl w-full mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01] flex flex-col lg:flex-row">

        {/* Left Section: Branding/Welcome Message */}
        <div className="relative lg:w-1/2 bg-gradient-to-br from-indigo-600 to-purple-700 p-8 sm:p-10 lg:p-12 text-white flex flex-col justify-center items-center text-center lg:rounded-l-3xl rounded-t-3xl lg:rounded-tr-none">
          <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none"></div> {/* Subtle background pattern */}
          <Sparkles size={64} className="text-white mb-6 animate-pulse" />
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Welcome Back!
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-6 max-w-sm">
            Sign in to your account to continue your journey with us.
          </p>
          <p className="text-sm opacity-70">
            Don't have an account?{' '}
            <a href="#" className="font-semibold text-white hover:text-indigo-200 transition-colors duration-200 underline">
              Register here
            </a>
          </p>
        </div>

        {/* Right Section: Login Form */}
        <div className="lg:w-1/2 p-8 sm:p-10 lg:p-12 bg-white lg:rounded-r-3xl rounded-b-3xl lg:rounded-bl-none">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Sign In
          </h3>
          <form className="space-y-6">
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
                  autoComplete="current-password"
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-600 focus:border-purple-600 transition-all duration-300 text-gray-900"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500 transition-colors duration-200">
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
