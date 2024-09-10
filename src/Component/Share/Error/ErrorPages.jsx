import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold text-gray-800 animate-bounce delay-75">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-600 animate-fadeIn delay-150">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg text-gray-500 animate-fadeIn delay-300">
          It might have been moved or deleted.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 animate-fadeIn delay-500"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
