import { useContext } from "react";
import { AnimalList } from "../components/AnimalList";
import { FavoriteContext } from "../contexts/FavoriteContext";

export function FavoriteAnimalsPage() {
  const { favoriteAnimals } = useContext(FavoriteContext);
  return <AnimalList withFavoriteButton={false} animals={favoriteAnimals} />;
}
