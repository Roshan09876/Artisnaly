import React, { useState } from 'react';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Products', to: '/products' },
    { name: 'About Us', to: '/about' },
    { name: 'Contact Us', to: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            MyShop
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            ))}

            <FiShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer" />

            <Link to="/login" className="text-sm px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
              Login
            </Link>
            <Link to="/register" className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 text-2xl focus:outline-none">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="block text-gray-700 hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="flex items-center gap-3 mt-2">
            <FiShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer" />
            <Link to="/login" className="text-sm px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
              Login
            </Link>
            <Link to="/register" className="text-sm px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
