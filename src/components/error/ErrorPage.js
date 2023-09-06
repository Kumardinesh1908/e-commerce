import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ErrorPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const redirect = () => {
      navigate(-1);
    };
    const timeoutId = setTimeout(redirect, 3000);
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  const error = useSelector((state) => state.ecommerce.error);

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }
  else {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <h1 className="">OOPS!! Something went wrong. You will be re-directed to previous page in 3-seconds.</h1>
      </div>
    )
  }
}

export default ErrorPage;
