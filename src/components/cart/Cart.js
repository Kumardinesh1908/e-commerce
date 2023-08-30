import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../cart/EmptyCart';
import CartItems from '../cart/CartItems';

const Cart = () => {
    // Get the list of products from the Redux store
    const cart = useSelector((state) => state.ecommerce.cart);

    return (
        <div className='flex gap-5 w-full h-full bg-gray-200 '>
            {/* Check if the cart is not empty */}
            {cart.length > 0 
                    ? (<CartItems />)  // If cart is not empty, render CartItems component
                    : (<EmptyCart />)  // If cart is empty, render EmptyCart component
            }
        </div>
    )
}

export default Cart;



