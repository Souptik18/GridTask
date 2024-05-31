import React from "react";

function Details({ item, onClose }) {
  const { title, description, price, image, category, rating } = item;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black bg-opacity-80">
      <div className="relative w-auto max-w-4xl mx-auto my-6">
        <div className="relative bg-white rounded-lg shadow-lg p-4">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4 text-gray-700 cursor-pointer hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <img
            src={image}
            alt={title}
            className="mx-auto rounded-t-lg w-80 h-80"
          />
          <div className="p-4">
            <span className="text-xl font-bold">{title}</span>
            <span className="text-gray-600 float-right ml-2">
              {rating.count} Reviews
            </span>
            <span className="text-gray-600 float-right">{rating.rate}</span>
            <h2 className="text-gray-600">{category}</h2>

            <p className="text-gray-700 mt-2">{description}</p>
            <p className="text-gray-900 font-semibold">$ {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
