import React from 'react';
import { PlusCircle } from 'lucide-react'; // Icon for add product button

const AddProductPage = () => {
  return (
    <div className="p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add New Product</h2>
      <form className="space-y-6 max-w-lg mx-auto">
        <div>
          <label htmlFor="productTitle" className="block text-sm font-semibold text-gray-700 mb-1">Product Title</label>
          <input type="text" id="productTitle" placeholder="e.g., Hand-Painted Ceramic Mug" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" />
        </div>
        <div>
          <label htmlFor="productDescription" className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
          <textarea id="productDescription" rows="4" placeholder="Detailed product description..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 resize-y"></textarea>
        </div>
        <div>
          <label htmlFor="productType" className="block text-sm font-semibold text-gray-700 mb-1">Product Type</label>
          <input type="text" id="productType" placeholder="e.g., Drinkware, Wall Decor" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="productPrice" className="block text-sm font-semibold text-gray-700 mb-1">Original Price</label>
            <input type="number" id="productPrice" placeholder="e.g., 300" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" />
          </div>
          <div>
            <label htmlFor="discountPrice" className="block text-sm font-semibold text-gray-700 mb-1">Discount Price (Optional)</label>
            <input type="number" id="discountPrice" placeholder="e.g., 250" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" />
          </div>
        </div>
        <div>
          <label htmlFor="productImage" className="block text-sm font-semibold text-gray-700 mb-1">Image URL</label>
          <input type="url" id="productImage" placeholder="https://example.com/image.jpg" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500" />
        </div>
        <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 transform hover:-translate-y-0.5">
          <PlusCircle size={20} className="mr-2" /> Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
