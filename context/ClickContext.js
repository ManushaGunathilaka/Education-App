import React, { createContext, useState, useContext } from "react";

const ClickContext = createContext();

export function ClickProvider({ children }) {
  const [clickCount, setClickCount] = useState(0); // Tracks click count
  const [favorites, setFavorites] = useState([]); // Tracks favorite courses

  const incrementCount = () => setClickCount((prev) => prev + 1);

  const toggleFavorite = (courseId) => {
    setFavorites(
      (prevFavorites) =>
        prevFavorites.includes(courseId)
          ? prevFavorites.filter((id) => id !== courseId) // Remove from favorites
          : [...prevFavorites, courseId] // Add to favorites
    );
  };

  return (
    <ClickContext.Provider
      value={{
        clickCount,
        incrementCount,
        favorites,
        toggleFavorite,
      }}
    >
      {children}
    </ClickContext.Provider>
  );
}

export const useClick = () => useContext(ClickContext);
