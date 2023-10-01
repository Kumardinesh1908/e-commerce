# E-Commerce Web Application :tv:
Discover a seamless shopping experience with our e-commerce app, featuring easy product management and real-time cart control.<br>
<br>

<img src="/screenshots/homePage.png">

## Features :fire:
:tv: **Product Listing**: Extensive catalog of products.<br>
:tv: **Product Details**: Get comprehensive details, including descriptions, images, and pricing.<br>
:tv: **Add New Product**: Contribute to the product inventory by adding new items.<br>
:tv: **Edit Product Details**: Modify existing product details, including titles, prices, descriptions, and ratings.<br>
:tv: **Cart Management**: Add products, adjust quantities, and remove items as needed. The cart provides a real-time overview of selected products.<br>
:tv: **Sorting**: Sort products by price for both ascending and descending order.<br>

<img src="/screenshots/products page.png">


## Tech Stack :computer:
:clapper: **React** <br>
:clapper: **Redux Toolkit** <br>
:clapper: **React-Router-Dom** <br>


## Key Takeaways 🖥️ Programming
:movie_camera: **State Management**: Utilizing Redux Toolkit to manage the global state and store for efficient data sharing across components.
:movie_camera: **React Routing**: Implementing React Router for navigation and maintaining multiple views within the application.
:movie_camera: **Component Structure**: Organizing components into modular and reusable structures to enhance readability and maintainability.
:movie_camera: **API Integration**: Using Axios to interact with backend APIs for fetching, updating, and adding data.


## Folder Structure :file_folder:
```
e-commerce/
├── public/
│   └── ... (public assets)
├── src/
│   ├── assets/
│   │   └── ... (images)
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── products/
│   │   │   ├── ProductsList.js
│   │   │   ├── ProductDetails.js
│   │   │   └──  AddProduct.js
│   │   ├──  cart/
│   │   |   ├── Cart.js
│   │   |   ├── CartItems.js
│   │   |   ├── scrollbar.css
│   │   |   └── EmptyCart.js
│   │   └──  error/
│   │       └── ErrorPage.js
│   ├── redux/
│   │   ├── ecommerceSlice.js
│   │   └── store.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```


  
## Installation :notebook:
1. Node.js (npm will be installed with Node.js)
1. Clone the repository:
```bash
git clone https://github.com/Kumardinesh1908/e-commerce.git
```
2. Navigate to the project directory:
```bash
cd e-commerce
```
3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run start
```
5. Access the app in your browser at http://localhost:3000.
   

## Live Demo
Check out the live demo of the App: https://e-commerce-kumardinesh1908.vercel.app/


