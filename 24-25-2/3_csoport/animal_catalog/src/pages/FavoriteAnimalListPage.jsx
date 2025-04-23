import { useContext } from "react";
import { AnimalList } from "../components/AnimalList";
import { FavoritesContext } from "../contexts/FavoritesContext";

export function FavoriteAnimalListPage() {
  const { favoriteAnimals } = useContext(FavoritesContext);
  return <AnimalList withFavoriteButton={false} animals={favoriteAnimals} />;
}
