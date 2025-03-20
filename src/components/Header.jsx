import React from "react";

const Header = () => {
  return (
    <header className="bg-[#37515F] text-white shadow-md">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg
            className="w-8 h-8 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <h1 className="text-2xl font-bold">Recipe Finder</h1>
        </div>
        <button className="bg-[#D64933] hover:bg-[#c13e29] px-4 py-2 rounded-lg text-sm font-medium transition duration-300">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
