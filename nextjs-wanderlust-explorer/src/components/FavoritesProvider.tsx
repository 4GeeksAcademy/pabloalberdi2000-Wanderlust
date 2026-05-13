"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactElement, ReactNode } from "react";

interface FavoritesContextValue {
  favoriteIds: string[];
  toggleFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

const FAVORITES_STORAGE_KEY = "wanderlust.favoriteIds";

const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }): ReactElement {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    if (typeof window === "undefined") {
      return [];
    }

    const serialized = window.localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!serialized) {
      return [];
    }

    try {
      const parsed = JSON.parse(serialized) as unknown;
      if (Array.isArray(parsed) && parsed.every((item) => typeof item === "string")) {
        return parsed;
      }
    } catch {
      window.localStorage.removeItem(FAVORITES_STORAGE_KEY);
    }

    return [];
  });

  useEffect(() => {
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const value = useMemo<FavoritesContextValue>(
    () => ({
      favoriteIds,
      toggleFavorite: (id: string) => {
        setFavoriteIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
      },
      isFavorite: (id: string) => favoriteIds.includes(id),
    }),
    [favoriteIds],
  );

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export function useFavorites(): FavoritesContextValue {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider.");
  }
  return context;
}