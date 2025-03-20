import React from "react";

const RecipeCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
          <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        <div className="flex items-center mb-3">
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse mr-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          <div className="h-6 bg-gray-200 rounded-full w-1/4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-full w-1/5 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-full w-1/6 animate-pulse"></div>
        </div>

        <div className="h-9 bg-gray-200 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default RecipeCardSkeleton;
