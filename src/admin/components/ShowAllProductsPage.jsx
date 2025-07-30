import React from 'react';
import { Package } from 'lucide-react'; // Icon for products

const ShowAllProductsPage = () => {
  // Dummy product data for demonstration
  const dummyProducts = [
    { _id: '1', title: 'High-Waisted Trousers', productPrice: '2,000', discountPrice: '1,000', image: 'https://placehold.co/100x100/6b46c1/ffffff?text=Product1' },
    { _id: '2', title: 'Hand-Painted Ceramic Mug', productPrice: '300', discountPrice: '50', image: 'https://placehold.co/100x100/6b46c1/ffffff?text=Product2' },
    { _id: '3', title: 'Macrame Wall Hanging', productPrice: '500', discountPrice: '50', image: 'https://placehold.co/100x100/6b46c1/ffffff?text=Product3' },
    { _id: '4', title: 'Handwoven Rattan Basket', productPrice: '800', discountPrice: '150', image: 'https://placehold.co/100x100/6b46c1/ffffff?text=Product4' },
  ];

  return (
    <div className="p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">All Products</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Image</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Title</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Price</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Discount</th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dummyProducts.map((product) => (
              <tr key={product._id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <img src={product.image} alt={product.title} className="w-12 h-12 object-cover rounded-md" />
                </td>
                <td className="py-3 px-4 text-gray-800 font-medium">{product.title}</td>
                <td className="py-3 px-4 text-gray-700">${product.productPrice}</td>
                <td className="py-3 px-4 text-green-600">${product.discountPrice}</td>
                <td className="py-3 px-4">
                  <button className="text-purple-600 hover:text-purple-800 text-sm font-medium mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* In a real app, you'd fetch data using getAllProductApi and display it here */}
    </div>
  );
};

export default ShowAllProductsPage;
