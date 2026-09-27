"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Baca localStorage SETELAH mount, bukan pas render awal
  useEffect(() => {
    try {
      const stored = localStorage.getItem("favorites");
      if (stored) setFavorites(JSON.parse(stored));
    } catch {
      // localStorage corrupt atau nggak bisa diakses, biarin kosong
    }
    setIsLoaded(true);
  }, []);

  // Simpan ke localStorage tiap kali favorites berubah
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, isLoaded]);

  const isFavorite = (userId) => favorites.some((fav) => fav.id === userId);

  const toggleFavorite = (user) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === user.id)
        ? prev.filter((fav) => fav.id !== user.id)
        : [...prev, user]
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorite() {
  const context = useContext(FavoriteContext);
  if (!context) throw new Error("useFavorite harus dipakai di dalam FavoriteProvider");
  return context;
}