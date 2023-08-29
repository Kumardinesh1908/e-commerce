import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, deleteProduct, addToCart } from '../redux/ecommerceSlice';
import star from "../assests/star.png";
import halfStar from "../assests/halfStar.png";
import emptyStar from "../assests/emptyStar.png"

export const ProductsList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.ecommerce.products);

    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortAscending, setSortAscending] = useState(true);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        const sorted = [...products].sort((a, b) => {
            return sortAscending ? a.price - b.price : b.price - a.price;
        });
        setSortedProducts(sorted);
    }, [products, sortAscending]);

    const handleToggleSort = () => {
        setSortAscending(!sortAscending);
    };

    // Function to handle the Add to Cart button click
    const handleAddToCart = (product) => {
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            thumbnail: product.thumbnail,
            quantity: 1,
            rating: product.rating,
        }));
    };


    const handleEditProduct = (productId) => {
        // Implement edit product logic
    };

    const handleDeleteProduct = (productId) => {
        const productToDelete = products.find((product) => product.id === productId);
        if (productToDelete) {
            // Implement delete product logic
            dispatch(deleteProduct(productToDelete.title));
            // Show a notification/alert here
        }
    };




    return (
        <div className="container mx-auto py-8">
            <div className=" mb-4 w-full flex items-center justify-between">
                <h2 className="text-2xl font-semibold">All Products : {products.length}</h2>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md font-semibold"
                    onClick={handleToggleSort}
                >
                    Sort by Price {sortAscending ? '↑' : '↓'}
                </button>
            </div>

            <div className='w-full flex flex-wrap justify-evenly'>
                {sortedProducts.map((product) => (
                    <div className='w-[23%] my-5 rounded border-[1px] border-gray-200 shadow-none hover:shadow-divShadow duration-200' key={product.id}>
                        <div className=" bg-gray-100 border-b-[1px] border-gray-200 flex justify-center items-center cursor-pointer " >
                            <Link to={`${product.title}`} >
                                <img className="w-full h-72 rounded-tr rounded-tl" src={product.thumbnail} alt="productImage" />
                            </Link>
                        </div>
                        <div className='p-2 '>
                            <Link to={`${product.title}`} >
                                <div>
                                    <p className="text-lg font-medium cursor-pointer">{product.title}</p>
                                </div>
                            </Link>
                            <div className='my-3'>
                                <p>{product.description.substring(0, 50)}...</p>
                            </div>
                            <div className='flex items-center '>
                                {[1, 2, 3, 4, 5].map((starIndex) => (
                                    <img
                                        key={starIndex}
                                        className='w-4 h-4'
                                        src={starIndex <= product.rating ? star : (starIndex - 0.5 <= product.rating ? halfStar : emptyStar)}
                                        alt={`star-${starIndex}`}
                                    />
                                ))}
                                <div className='ml-1 text-blue-500'>{product.rating}</div>
                            </div>
                            <div className='flex items-center mt-1'>
                                <p className='font-medium mb-1'>&nbsp;₹&nbsp;</p>
                                <span className='text-[26px] font-medium'>{product.price}</span>
                                <span>&nbsp;(10% Off)</span>
                            </div>
                            <button
                                onClick={() => handleAddToCart(product)}
                                className={`text-lg font-medium w-full text-center rounded-lg bg-yellow-300 hover:bg-yellow-400 p-[4px] mt-3 shadow active:ring-2 active:ring-offset-1 active:ring-blue-500`}
                            >Add to Cart</button>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    );
};
