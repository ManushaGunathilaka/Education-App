import React, { createContext, useState, useContext } from "react";

const ClickContext = createContext();

export function ClickProvider({ children }) {
  const [clickCount, setClickCount] = useState(0);

  const incrementCount = () => setClickCount((prev) => prev + 1);

  return (
    <ClickContext.Provider value={{ clickCount, incrementCount }}>
      {children}
    </ClickContext.Provider>
  );
}

export const useClick = () => useContext(ClickContext);
