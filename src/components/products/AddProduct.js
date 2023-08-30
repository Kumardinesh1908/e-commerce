import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../redux/ecommerceSlice';

export const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for form fields
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isNaN(price)) {           // Validating the price input field
      alert('Please enter valid numeric values for Price.');
      return;
    }
    if (isNaN(rating)) {          // Validating the rating input field
      alert('Please enter valid numeric values for Rating.');
      return;
    }
    // Create new product data
    const newProductData = {
      title,
      price: parseFloat(price),
      description,
      rating,
    };
    try {
      dispatch(addProduct(newProductData));
      alert('Product added successfully!');
      // Clear the form fields
      setTitle('');
      setPrice('');
      setDescription('');
      setRating('');
      // navigate back to the products list
      navigate('/allProducts');
    } catch (error) {
      alert('Error in adding product. Please try again.');
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium mb-2">Title</label>
          <input
            type="text"
            id="title"
            className="w-full border p-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-2">Price</label>
          <input
            type="text"
            id="price"
            className="w-full border p-2 rounded"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-2">Description</label>
          <input
            type="text"
            id="description"
            className="w-full border p-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block font-medium mb-2">Rating</label>
          <input
            type="text"
            id="rating"
            className="w-full border p-2 rounded"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-semibold"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};


