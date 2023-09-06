import React, {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, productDeleted, updateProduct } from '../../redux/ecommerceSlice';
import star from "../../assests/star.png";
import halfStar from "../../assests/halfStar.png";
import emptyStar from "../../assests/emptyStar.png";
import productImage from "../../assests/product-Image.png";
import edit from "../../assests/edit.png";
import Delete from "../../assests/Delete.png";
import save from "../../assests/save.png";
import cancel from "../../assests/cancel.png";
import cart from "../../assests/cart.png";
import cross from "../../assests/cross.png";

const ProductsList = () => {
    const dispatch = useDispatch(); // Get dispatch function from Redux store
    const products = useSelector((state) => state.ecommerce.products);  // Getting the list of products from Redux store

    // State for sorting products
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortAscending, setSortAscending] = useState(false); 

    // Sort products based on price
    useEffect(()=>{
    const sorted = [...products].sort((a, b) => a.price - b.price );
    if(sortAscending) 
    {setSortedProducts(sorted) } 
    else
    {setSortedProducts(products)} },[sortAscending , products])

    // Toggle sorting button
    const handleToggleSort = () => {
        setSortAscending(!sortAscending);
    };

    // Add product to cart
    const handleAddToCart = (product) => {
        const { id, title, price, description, category, thumbnail, rating } = product;
        dispatch(addToCart({
            id,
            title,
            price,
            description,
            category,
            thumbnail,
            quantity: 1,
            rating,
        }));
    };

    // States for edited product and its details
    const [editedProduct, setEditedProduct] = useState(null);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [editedRating, setEditedRating] = useState(0);
    const [editedPrice, setEditedPrice] = useState(0);

    // Handle edit button click
    const handleEditClick = (product) => {
        setEditedProduct(product);
        setEditedTitle(product.title);
        setEditedDescription(product.description);
        setEditedRating(product.rating);
        setEditedPrice(product.price);
    };

    // Save edited product details
    const handleSaveEdit = () => {
        if (isNaN(editedPrice)) {
            alert('Please enter valid numeric values for Price.');
            return;
        }
        if (isNaN(editedRating)) {
            alert('Please enter valid numeric values for Rating.');
            return;
        }
        const updatedProduct = {
            ...editedProduct,
            title: editedTitle,
            description: editedDescription,
            rating: editedRating,
            price: editedPrice,
        };
        dispatch(updateProduct(updatedProduct));
        setEditedProduct(null);
        alert('Product updated successfully');
    };
    
    // Cancel edit and reset edited product details
    const handleCancelEdit = () => {
        setEditedProduct(null);
        setEditedTitle('');
        setEditedDescription('');
        setEditedRating(0);
        setEditedPrice(0);
    };

    // Delete product
    const handleDeleteClick = (product) => {
        const shouldDelete = window.confirm(`Are you sure you want to delete ${product.title}?`);
        if (shouldDelete) {
            dispatch(productDeleted(product.title));
            alert('Product Deleted Successfully');
        }
    };

    // Generate star icons for rating display
    const ratingStars = (rating) => {
        const starIcons = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                starIcons.push(<img key={i} className='w-4 h-4' src={star} alt={`star-${i}`} />);
            } else if (i - 0.5 <= rating) {
                starIcons.push(<img key={i} className='w-4 h-4' src={halfStar} alt={`star-${i}`} />);
            } else {
                starIcons.push(<img key={i} className='w-4 h-4' src={emptyStar} alt={`star-${i}`} />);
            }
        }
        return starIcons;
    };


    return (
        <div className='container mx-auto py-8'>
            {/* Header */}
            <div className='mb-4 w-full flex items-center justify-between'>
                <h2 className='text-2xl font-semibold'>All Products: {products.length}</h2>
                <Link to='/addProduct'>
                    <button className='px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-semibold text-lg'>
                        Add new product +
                    </button>
                </Link>
                <button onClick={handleToggleSort} className='px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-md font-semibold text-lg flex flex-row items-center justify-center gap-3'>
                    <span>Sort by Price</span> 
                    {sortAscending ? <img src= {cross} alt="cross" className='w-5 h-5 '/> : null}
                </button>
            </div>

            {/* Product list */}
            <div className='w-full flex flex-wrap justify-evenly'>
                {sortedProducts.map((product, index) => (
                    <div className='w-[23%] my-5 rounded border-[1px] border-gray-200 shadow-none hover:shadow-divShadow duration-200' key={index}>

                        {/* Product Image */}
                        <div className='bg-gray-100 border-b-[1px] border-gray-200 flex justify-center items-center cursor-pointer'>
                            <Link to={`${product.title}`}>
                                <img className='w-full h-72 rounded-tr rounded-tl' src={product.thumbnail || productImage} alt='productImage' />
                            </Link>
                        </div>

                        {/* Product Details */}
                        <div className='p-2'>

                            {/* Title */}
                            {editedProduct === product ? (
                                <input
                                    type='text'
                                    value={editedTitle}
                                    onChange={(e) => setEditedTitle(e.target.value)}
                                    className='border-2 rounded-md w-full text-lg font-medium px-2'
                                />
                            ) : (
                                <Link to={`${product.title}`}>
                                    <p className='text-lg font-medium cursor-pointer capitalize'>{product.title}</p>
                                </Link>
                            )}

                            {/* Description */}
                            <div className='my-3'>
                                {editedProduct === product ? (
                                    <textarea
                                        rows='3'
                                        type='text'
                                        value={editedDescription}
                                        onChange={(e) => setEditedDescription(e.target.value)}
                                        className='border-2 rounded-md w-full px-2'
                                    />
                                ) : (
                                    <p className='break-words'>{product.description.substring(0, 50)}...</p>
                                )}
                            </div>

                            {/* Rating */}
                            <div className='flex items-center'>
                                {ratingStars(editedProduct === product ? editedRating : product.rating)}
                                {editedProduct === product ? (
                                    <input
                                        type='text'
                                        value={editedRating}
                                        onChange={(e) => setEditedRating(e.target.value)}
                                        className='border-2 rounded-md pl-2'
                                    />
                                ) : (
                                    <div className='ml-1 text-blue-500'>{product.rating}</div>
                                )}
                            </div>

                            {/* Price */}
                            <div className='flex items-center mt-1'>
                                <p className='font-medium mb-1'>&nbsp;₹&nbsp;</p>
                                {editedProduct === product ? (
                                    <input
                                        type='text'
                                        value={editedPrice}
                                        onChange={(e) => setEditedPrice(e.target.value)}
                                        className='border-2 rounded-md w-[50%] pl-2'
                                    />
                                ) : (
                                    <span className='text-[26px] font-medium'>{product.price}</span>
                                )}
                                <span>&nbsp;(10% Off)</span>
                            </div>

                            {/* Edit, Save, Cancel-Edit and Delete Buttons */}
                            <div className='mt-3 flex items-center space-x-2'>
                                {editedProduct === product ? (
                                    <button
                                        onClick={handleSaveEdit}
                                        className='text-lg font-medium w-full text-center rounded-lg bg-lime-300 hover:bg-lime-400 p-[4px] shadow active:ring-2 active:ring-offset-1 active:ring-blue-500 flex flex-row items-center justify-center gap-3'
                                        >
                                            <img src= {save} alt="save" className='w-5 h-5'/>
                                            <span>Save</span>
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleEditClick(product)}
                                        className='text-lg font-medium w-full text-center rounded-lg bg-gray-200 hover:bg-gray-300 p-[4px] shadow active:ring-2 active:ring-offset-1 active:ring-blue-500 flex flex-row items-center justify-center gap-3'
                                    >
                                        <img src= {edit} alt="edit" className='w-5 h-5'/>
                                        <span>Edit</span>
                                    </button>
                                )}

                                {editedProduct === product ? (
                                    <button
                                        onClick={() => handleCancelEdit(product)}
                                        className='text-lg font-medium w-full text-center rounded-lg bg-red-300 hover:bg-red-400 p-[4px] shadow active:ring-2 active:ring-offset-1 active:ring-blue-500 flex flex-row items-center justify-center gap-3'
                                    >
                                        <img src= {cancel} alt="cancel" className='w-4 h-4'/>
                                        <span>Cancel</span>
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleDeleteClick(product)}
                                        className='text-lg font-medium w-full text-center rounded-lg bg-red-300 hover:bg-red-400 p-[4px] shadow active:ring-2 active:ring-offset-1 active:ring-blue-500 flex flex-row items-center justify-center gap-3'
                                    >
                                        <img src= {Delete} alt="Delete" className='w-5 h-5 '/>
                                        <span>Delete</span>
                                    </button>
                                )}
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={() => handleAddToCart(product)}
                                className='text-lg font-medium w-full text-center rounded-lg bg-yellow-300 hover:bg-yellow-400 p-[4px] mt-3 shadow active:ring-2 active:ring-offset-1 active:ring-blue-500 flex flex-row items-center justify-center gap-5'
                                >
                                    <img src= {cart} alt="cart" className='w-6 h-6 '/>
                                    <span>Add to cart</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;