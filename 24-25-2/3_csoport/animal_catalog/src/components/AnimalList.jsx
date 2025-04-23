import { AnimalListItem } from "./AnimalListItem";

export function AnimalList({ animals, withFavoriteButton = true }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {animals.map((animal, index) => (
        <AnimalListItem
          withFavoriteButton={withFavoriteButton}
          key={index}
          animal={animal}
        />
      ))}
    </div>
  );
}
