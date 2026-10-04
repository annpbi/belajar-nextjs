import { favorites } from "@/lib/db";

export function findAllFavorites() {
  return favorites;
}

export function findFavoriteById(id) {
  return favorites.find((f) => f.id === id);
}

export function insertFavorite(data) {
  favorites.push(data);
  return data;
}

export function deleteFavoriteById(id) {
  const index = favorites.findIndex((f) => f.id === id);
  if (index === -1) return false;

  favorites.splice(index, 1);
  return true;
}

export function updateFavoriteById(id, changes) {
  const favorite = favorites.find((f) => f.id === id);
  if (!favorite) return null;

  Object.assign(favorite, changes);
  return favorite;
}