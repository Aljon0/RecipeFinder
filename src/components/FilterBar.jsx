import React, { useState } from "react";

const FilterBar = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Recipes" },
    { id: "quick", name: "Quick & Easy" },
    { id: "vegan", name: "Vegan" },
    { id: "dessert", name: "Desserts" },
    { id: "dinner", name: "Dinner" },
  ];

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    onFilterChange(filterId);
  };

  return (
    <div className="mb-8 overflow-x-auto">
      <div className="flex space-x-2 pb-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handleFilterClick(filter.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition duration-300 ${
              activeFilter === filter.id
                ? "bg-[#37515F] text-white"
                : "bg-[#EDF2F4] text-[#37515F] hover:bg-[#8D99AE] hover:text-white"
            }`}
          >
            {filter.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
