import React from "react";
import { Navbar } from "./components/Navbar";
import { ProductsList } from "./components/ProductsList";
import { ProductDetails } from "./components/ProductDetails";
import image from "./assests/online-shopping-image.avif";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: (<div className="flex items-center justify-center">
            <img src={image} alt="main-img" />
          </div>),
        },
        {
          path: "/allProducts",
          element: <ProductsList />,
        },
        {
          path: "/allProducts/:title",
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
