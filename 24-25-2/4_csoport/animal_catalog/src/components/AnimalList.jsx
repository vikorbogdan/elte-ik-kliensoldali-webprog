import { useContext } from "react";
import { AnimalListCard } from "./AnimalListCard";
import { FavoriteContext } from "../contexts/FavoriteContext";

export function AnimalList({ animals, withFavoriteButton = true }) {
  const { favoriteAnimals } = useContext(FavoriteContext);
  return (
    <div className="flex gap-6 flex-wrap justify-center bg-red-50">
      {animals.map((animal, index) => (
        <AnimalListCard
          withFavoriteButton={withFavoriteButton}
          key={index}
          animal={animal}
          isFavorite={favoriteAnimals.some((elem) => elem.name === animal.name)}
        />
      ))}
    </div>
  );
}
