"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface CompareItem {
  image: string;
  name: string;
  price: string;
  description: string;
  rating: number;
  ratingCount: number;
  weight: string;
  inStock: boolean;
}

interface CompareContextProps {
  compareItems: CompareItem[];
  addToCompare: (item: CompareItem) => void;
  removeFromCompare: (name: string) => void;
}

export const CompareContext = createContext<CompareContextProps>({
  compareItems: [],
  addToCompare: () => {},
  removeFromCompare: () => {},
});

export const CompareProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [compareItems, setCompareItems] = useState<CompareItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const storedItems = localStorage.getItem("compareItems");
    if (storedItems) {
      setCompareItems(JSON.parse(storedItems));
    }
  }, []);

  // Save to localStorage whenever compareItems changes
  useEffect(() => {
    localStorage.setItem("compareItems", JSON.stringify(compareItems));
  }, [compareItems]);

  const addToCompare = (item: CompareItem) => {
    setCompareItems((prevItems) => {
      const exists = prevItems.some((i) => i.name === item.name);
      if (exists) return prevItems;
      return [...prevItems, item];
    });
  };

  const removeFromCompare = (name: string) => {
    setCompareItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  return (
    <CompareContext.Provider value={{ compareItems, addToCompare, removeFromCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);