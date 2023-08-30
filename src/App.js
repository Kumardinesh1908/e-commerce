import React, { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import ProductsList from "./components/products/ProductsList";
import { ProductDetails } from "./components/products/ProductDetails";
import { AddProduct } from "./components/products/AddProduct";
import Cart from "./components/cart/Cart";
import ErrorPage from "./components/error/ErrorPage";
import image from "./assests/online-shopping-image.avif";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/ecommerceSlice"; // Import your fetchProducts action

function App() {

  // Create a BrowserRouter with routes
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: <Navbar />,
      children: [
        {
          index: true,
          element: (
            <div className="flex items-center justify-center">
              <img src={image} alt="main-img" />
            </div>
          ),
        },
        {
          path: "/allProducts",
          element: <ProductsList />,
        },
        {
          path: "/allProducts/:title",
          element: <ProductDetails />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/addProduct",
          element: <AddProduct />,
        },
      ],
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products when the app loads
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
