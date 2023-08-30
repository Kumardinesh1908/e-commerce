import React, { useState } from 'react';
import { addToCart } from '../../redux/ecommerceSlice';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import star from "../../assests/star.png";
import halfStar from "../../assests/halfStar.png";
import emptyStar from "../../assests/emptyStar.png";
import productImage from "../../assests/product-Image.png"


export const ProductDetails = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.ecommerce.products);

    // Get the "title" parameter from the URL
    const { title } = useParams();

    const product = products.find((product) => product.title === title);

    const [cartButton, setCartButton] = useState(false);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    // Function to handle quantity change
    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value, 10);
        setSelectedQuantity(newQuantity);
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
            quantity: selectedQuantity,
            rating: product.rating,
        }));
    };

    return (
        <div className='flex bg-white justify-between'>

            <div className='w-[38%] mt-4 '>
                <img src={product.thumbnail || productImage} className='w-full h-[85%]' alt="productImage" />
            </div>

            <div className='w-[35%] mt-2 ' >
                <h1 className='text-[26px] font-bold capitalize'>{product.title}</h1>
                <div className='flex border-b-[1px] border-gray-200 pb-1'>
                    <span className='text-blue-500'>{product.rating}&nbsp;</span>
                    <span className='flex items-center '>
                        {[1, 2, 3, 4, 5].map((starIndex) => (
                            <img
                                key={starIndex}
                                className='w-4 h-4'
                                src={starIndex <= product.rating ? star : (starIndex - 0.5 <= product.rating ? halfStar : emptyStar)}
                                alt={`star-${starIndex}`}
                            />
                        ))}
                    </span>
                </div>
                <div className='border-b-[1px] border-gray-200 pb-2'>
                    <div className='flex items-center mt-1'>
                        <p className='font-medium mb-1'>&nbsp;₹&nbsp;</p>
                        <span className='text-[26px] font-medium'>{product.price}</span>
                        <span>&nbsp;(10% Off)</span>
                    </div>
                    <p>No Cost EMI available</p>
                </div>
                <div className='border-b-[1px] border-border-gray-200 pb-4'>
                    <div className='flex pt-3 pb-2'>
                        <span className='font-bold text-lg' >Offers</span>
                    </div>
                    <div className='flex justify-between'>
                        <div className='w-[30%] border-2 border-gray-200 rounded-lg p-2'>
                            <p className='font-semibold '>No Cost EMI</p>
                            <p>EMI interest savings on Amazon Pay ICICI…</p>
                        </div>
                        <div className='w-[30%] border-2 border-gray-200 rounded-lg p-2'>
                            <p className='font-semibold '>Bank Offers</p>
                            <p>Upto ₹1,750.00 discount on select Credit Cards, HDFC…</p>
                        </div>
                        <div className='w-[30%] border-2 border-gray-200 rounded-lg p-2'>
                            <p className='font-semibold '>Partner Offers</p>
                            <p>Get GST invoice and save up to 28% on business purchases.</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-between border-b-[1px] border-border-gray-200  pt-4 pb-2'>
                    <div className='w-[18%] flex flex-col  items-center '>
                        <p className='text-blue-500 text-xs'>Free Delivery</p>
                    </div>
                    <div className='w-[18%] flex flex-col  items-center '>
                        <p className='text-blue-500 text-xs'>Pay on Delivery</p>
                    </div>
                    <div className='w-[18%] flex flex-col  items-center '>
                        <p className='text-blue-500 text-xs text-center'>7 days Replacement</p>
                    </div>
                    <div className='w-[18%] flex flex-col  items-center justify-center '>
                        <span className='text-blue-500 text-xs'>eCommerce Delivered</span>
                    </div>
                    <div className='w-[18%] flex flex-col  items-center '>
                        <p className='text-blue-500 text-xs'>Secure transaction</p>
                    </div>
                </div>
                <div className='pt-2'>
                    <span className='font-bold'>About this item</span>
                    <div className='ml-2'>{product.description}</div>
                </div>
            </div>

            <div className='w-[20%] h-[50%] border-[0.066rem] border-gray-200 rounded-lg p-3 mt-2 mr-5'>
                <div className='flex items-center'>
                    <span className='text-[26px] font-medium text-red-600'>₹&nbsp;{product.price}</span>
                    <span>&nbsp;(10% Off)</span>
                </div>
                <span className='text-blue-500'>Delivery&nbsp;</span><span>within Two Days.</span>
                <p className='text-green-600 text-xl font-bold pt-4'>In stock.</p>
                <p className='pt-3'>Sold and Fulfilled by<span className='text-blue-500'> eCommerce.</span></p>
                <div className='pt-3'>
                    <span>Quantity: </span>
                    <select className='border-[1px] border-gray-200 rounded-md ' value={selectedQuantity} onChange={handleQuantityChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                {cartButton
                    ? <Link to="/cart">
                        <button className={`pt-2 w-full text-center text-blue-600 rounded-2xl  bg-gray-100 border-gray-200 p-[4px] mt-3 active:ring-2 active:ring-offset-1 active:ring-blue-600`}>
                            Go to Cart
                        </button>
                    </Link>
                    : <button
                        onClick={() => {
                            handleAddToCart(product);
                            setCartButton(true);
                        }}
                        className={`pt-2 w-full text-center rounded-2xl bg-yellow-300 hover:bg-yellow-400 p-[4px] mt-3 shadow active:ring-2 active:ring-offset-1 active:ring-blue-500`}>
                        Add to Cart
                    </button>}
                <p className='text-blue-500 pt-3'>Secure transaction</p>
            </div>
        </div>
    )
};
