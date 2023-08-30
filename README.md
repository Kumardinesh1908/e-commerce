# E-Commerce Web Application
Welcome to the E-Commerce Web Application, an intuitive platform designed for shopping and managing products. This application empowers users with the ability to explore a wide range of products, view their details, and seamlessly manage their shopping cart. Built using modern web development technologies, this app ensures a user-friendly experience that makes online shopping a breeze.

# Features
- Product Listing: The heart of the application, this feature allows users to browse through an extensive catalog of products. Users can view essential product information such as titles, images, prices, and ratings. It provides a user-friendly interface for managing products in an e-commerce setting, allowing users to edit and delete products with ease.
- Product Details: Dive deeper into product specifics by accessing dedicated pages for each item. Get comprehensive details, including descriptions, images, and pricing.
- Cart Management: Effortlessly manage your shopping cart. Add products, adjust quantities, and remove items as needed. The cart provides a real-time overview of selected products.
- Add New Product: Users can contribute to the product inventory by adding new items. The feature enables the input of vital details such as titles, prices, descriptions, and ratings.
- Sorting: Enhance your shopping experience by sorting products based on price. Choose between ascending and descending order to find the best deals.

# Folder Structure
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
│   │   └──  cart/
│   │       ├── Cart.js
│   │       ├── CartItems.js
│   │       ├── scrollbar.css
│   │       └── EmptyCart.js
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

# Technologies Used
- React: A JavaScript library for building user interfaces. React's component-based structure ensures reusable and modular UI elements.
- React Router: This technology enables smooth navigation and routing within the application, creating a seamless multi-page app experience.
- Axios: Make API requests to the backend with ease. Axios simplifies the process of fetching and managing data, ensuring efficient communication between the frontend and backend.
- Redux Toolkit: Efficiently manage the application's state with Redux Toolkit. This library streamlines state management, making data sharing between components efficient and organized.
- redux-persist: Keep the user experience seamless even after a refresh. Redux-persist maintains the application's state between sessions, preserving cart items and more.
- react-redux: Connect React components with the Redux store. This integration ensures that components have access to the global state.
- Tailwind CSS: Tailwind CSS offers utility classes for styling, making it simple to create consistent and responsive designs.

# Key Takeaways
- State Management: Utilizing Redux Toolkit to manage the global state and store for efficient data sharing across components.
- React Routing: Implementing React Router for navigation and maintaining multiple views within the application.
- Component Structure: Organizing components into modular and reusable structures to enhance readability and maintainability.
- API Integration: Using Axios to interact with backend APIs for fetching, updating, and adding data.

# Getting Started
Follow these steps to set up and run the project on your local machine.

## Prerequisites
- Node.js (npm will be installed with Node.js)
  
## Installation
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
   

# Live Demo
Check out the live demo of the App: https://albums-kumardinesh1908.vercel.app/
