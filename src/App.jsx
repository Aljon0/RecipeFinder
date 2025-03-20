import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/Searchbar";
import FilterBar from "./components/FilterBar";
import RecipeList from "./components/RecipeList";
import FavoritesList from "./components/FavoritesList";
import RecipeDetail from "./components/RecipeDetail";
import RecipeCardSkeleton from "./components/RecipeCardSkeleton";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

const App = () => {
  const [activeTab, setActiveTab] = useState("discover");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  // Sample recipe data
  const [recipes] = useState([
    {
      id: 1,
      title: "Pasta Carbonara",
      image: "/api/placeholder/400/300",
      time: "30 min",
      difficulty: "Medium",
      category: "dinner",
      ingredients: [
        "Spaghetti",
        "Eggs",
        "Pancetta",
        "Parmesan",
        "Black Pepper",
      ],
      instructions:
        "1. Cook pasta until al dente\n2. Fry pancetta until crispy\n3. Mix eggs and cheese\n4. Combine all ingredients",
    },
    {
      id: 2,
      title: "Avocado Toast",
      image: "/api/placeholder/400/300",
      time: "10 min",
      difficulty: "Easy",
      category: "quick",
      ingredients: ["Bread", "Avocado", "Lime", "Salt", "Red Pepper Flakes"],
      instructions:
        "1. Toast bread\n2. Mash avocado with lime and salt\n3. Spread on toast\n4. Sprinkle with red pepper flakes",
    },
    {
      id: 3,
      title: "Chocolate Brownie",
      image: "/api/placeholder/400/300",
      time: "45 min",
      difficulty: "Medium",
      category: "dessert",
      ingredients: [
        "Chocolate",
        "Butter",
        "Sugar",
        "Eggs",
        "Flour",
        "Vanilla Extract",
      ],
      instructions:
        "1. Melt chocolate and butter\n2. Mix in sugar and eggs\n3. Add flour and vanilla\n4. Bake at 350°F for 25-30 minutes",
    },
    {
      id: 4,
      title: "Vegan Buddha Bowl",
      image: "/api/placeholder/400/300",
      time: "20 min",
      difficulty: "Easy",
      category: "vegan",
      ingredients: [
        "Quinoa",
        "Avocado",
        "Chickpeas",
        "Kale",
        "Sweet Potato",
        "Tahini",
      ],
      instructions:
        "1. Cook quinoa\n2. Roast sweet potatoes and chickpeas\n3. Massage kale with lemon and salt\n4. Arrange in a bowl\n5. Drizzle with tahini dressing",
    },
  ]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Load favorites from local storage
  useEffect(() => {
    const savedFavorites = localStorage.getItem("recipeFavorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorites to local storage
  useEffect(() => {
    localStorage.setItem("recipeFavorites", JSON.stringify(favorites));
  }, [favorites]);

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesQuery =
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesFilter =
      activeFilter === "all" || recipe.category === activeFilter;

    return matchesQuery && matchesFilter;
  });

  const toggleFavorite = (recipe) => {
    if (favorites.some((fav) => fav.id === recipe.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== recipe.id));
      showNotification(`Removed "${recipe.title}" from favorites`, "info");
    } else {
      setFavorites([...favorites, recipe]);
      showNotification(`Added "${recipe.title}" to favorites`, "success");
    }
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-6">
        {!selectedRecipe ? (
          <>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            <div className="flex justify-center mb-6">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    activeTab === "discover"
                      ? "bg-[#37515F] text-white"
                      : "bg-[#EDF2F4] text-[#37515F]"
                  }`}
                  onClick={() => setActiveTab("discover")}
                >
                  Discover Recipes
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    activeTab === "favorites"
                      ? "bg-[#D64933] text-white"
                      : "bg-[#EDF2F4] text-[#37515F]"
                  }`}
                  onClick={() => setActiveTab("favorites")}
                >
                  Favorites ({favorites.length})
                </button>
              </div>
            </div>

            {activeTab === "discover" && (
              <FilterBar onFilterChange={handleFilterChange} />
            )}

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <RecipeCardSkeleton key={item} />
                ))}
              </div>
            ) : activeTab === "discover" ? (
              <RecipeList
                recipes={filteredRecipes}
                favorites={favorites}
                onSelectRecipe={setSelectedRecipe}
                onToggleFavorite={toggleFavorite}
              />
            ) : (
              <FavoritesList
                favorites={favorites}
                onSelectRecipe={setSelectedRecipe}
                onToggleFavorite={toggleFavorite}
              />
            )}
          </>
        ) : (
          <RecipeDetail
            recipe={selectedRecipe}
            isFavorite={favorites.some((fav) => fav.id === selectedRecipe.id)}
            onBack={() => setSelectedRecipe(null)}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </main>

      <Footer />

      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
};

export default App;
