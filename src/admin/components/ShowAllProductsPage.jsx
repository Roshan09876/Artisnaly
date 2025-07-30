import React, { useEffect, useState } from 'react';
import { getAllProductApi } from '../../api/api'; 

const ShowAllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await getAllProductApi();
        if (res.data.success) {
          setProducts(res.data.products);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center p-6">Loading products...</p>;
  if (error) return <p className="text-center p-6 text-red-600">{error}</p>;

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
            {products.map((product) => (
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
    </div>
  );
};

export default ShowAllProductsPage;
