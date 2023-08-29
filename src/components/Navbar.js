import React, { useState, useEffect } from 'react';
import profile from "../assests/profile.png";
import cartIcon from "../assests/cart.png";
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

export const Navbar = () => {

    const cart = useSelector((state) => state.ecommerce.cart);

    const [totalQty, setTotalQty] = useState(0);
    // Calculate total quantity of cart
    useEffect(() => {
        let allQty = 0;
        cart.forEach((product) => {
            allQty += product.quantity;
        });
        setTotalQty(allQty);
    }, [cart]);


    return (
        <>
            <div className='flex flex-row justify-between items-center py-5 pr-10 bg-blue-400 sticky top-0'>
                <div className='flex flex-row w-[30%] justify-around items-center'>
                    <Link to="/">
                        <p className='text-lg font-semibold'>eCommerce</p>
                    </Link>
                    <Link to="/allProducts">
                        <p className='text-lg font-semibold'>Products</p>
                    </Link>
                    <p className='text-lg font-semibold'>Add a product + </p>
                </div>
                <div className='flex flex-row gap-5 items-center relative'>
                    <p className='text-xl font-semibold'>John Doe</p>
                    <div className='w-10 h-10'>
                        <img src={profile} alt="user" />
                    </div>
                    <div className='w-10 h-10'>
                        <img src={cartIcon} alt="user" />
                    </div>
                    <span className='text-base font-semibold p-2 h-6 bg-lime-500 text-white rounded-full absolute left-[92%] -top-2 flex items-center justify-center'>{totalQty}</span>
                </div>
            </div>
            <Outlet />
        </>
    )
};


