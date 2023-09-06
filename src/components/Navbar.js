import React, { useState, useEffect } from 'react';
import profile from "../assests/profile.png";
import cartIcon from "../assests/cart.png";
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

export const Navbar = () => {

    const cart = useSelector((state) => state.ecommerce.cart);  // Get the cart items from Redux store

    const [totalQty, setTotalQty] = useState(0);  // State to hold total quantity of items in cart

    // Calculate total quantity of items in the cart
    useEffect(() => {
        let allQty = 0;
        cart.forEach((product) => {
            allQty += product.quantity;
        });
        setTotalQty(allQty);
    }, [cart]);


    return (
        <>
            <div className='flex flex-row justify-between items-center py-5 pr-10 bg-blue-500 sticky top-0'>

                {/* Logo and navigation links */}
                <div className='flex flex-row w-[30%] justify-around items-center'>
                    <Link to="/">
                        <p className='text-4xl font-semibold' style={{
                            backgroundImage: 'linear-gradient(135deg, #ff6b6b, #b3ffcc,#b3ffcc, #ffe066)',
                            WebkitBackgroundClip: 'text',
                            color: 'transparent',
                        }}>
                            eCommerce</p>
                    </Link>
                    <Link to="/allProducts">
                        <p className='text-2xl font-semibold text-white'>All Products</p>
                    </Link>
                </div>

                {/* User profile and cart icons with item count */}
                <div className='flex flex-row gap-5 items-center relative'>
                    <p className='text-xl font-semibold '>Dinesh Kumar</p>
                    <div className='w-10 h-10'>
                        <img src={profile} alt="user" />
                    </div>
                    <Link to="/cart">
                        <div className='w-10 h-10'>
                            <img src={cartIcon} alt="user" />
                            <span className='text-base font-semibold p-2 h-6 bg-lime-500 text-white rounded-full absolute left-[92%] -top-2 flex items-center justify-center'>{totalQty}</span>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Render nested routes */}
            <Outlet />
        </>
    )
};


