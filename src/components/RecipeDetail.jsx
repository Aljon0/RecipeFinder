import React from "react";

const RecipeDetail = ({ recipe, isFavorite, onBack, onToggleFavorite }) => {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-[#37515F] hover:text-[#D64933] mb-6 transition duration-300"
      >
        <svg
          className="w-5 h-5 mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to recipes
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          <button
            onClick={() => onToggleFavorite(recipe)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300"
          >
            {isFavorite ? (
              <svg
                className="w-6 h-6 text-[#D64933]"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#1F0812] mb-4">
            {recipe.title}
          </h2>

          <div className="flex mb-6">
            <div className="flex items-center mr-6">
              <svg
                className="w-5 h-5 mr-2 text-[#D64933]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-gray-700">{recipe.time}</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-[#D64933]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-gray-700">{recipe.difficulty}</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#37515F] mb-3">
              Ingredients
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 text-[#D64933] flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#37515F] mb-3">
              Instructions
            </h3>
            <div className="prose max-w-none text-gray-700">
              {recipe.instructions.split("\n").map((step, index) => (
                <p key={index} className="mb-2">
                  {step}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="bg-[#D64933] hover:bg-[#c13e29] text-white px-8 py-3 rounded-lg shadow-md transition duration-300">
              Print Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
