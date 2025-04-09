import { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";

export function AnimalListCard({ animal, isFavorite, withFavoriteButton }) {
  const { favoriteAnimals, setFavoriteAnimals } = useContext(FavoriteContext);

  function handleFavorite(animal) {
    if (isFavorite) {
      setFavoriteAnimals(
        favoriteAnimals.filter((elem) => elem.name !== animal.name)
      );
    } else {
      setFavoriteAnimals([...favoriteAnimals, animal]);
    }
  }

  return (
    <div className="p-4 w-56 relative bg-white shadow-lg rounded-xl flex flex-col items-center">
      {withFavoriteButton && (
        <button
          onClick={() => handleFavorite(animal)}
          className="absolute right-2 top-2 border-red-500 border-[1px] p-1 rounded-md"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      )}
      <img
        className="w-20 h-20 rounded-full object-cover"
        src={animal.img}
        alt={animal.name}
      />
      <h2 className="font-bold">{animal.name}</h2>
      <span>{animal.diet}</span>
      <span>{animal.avgLifespan}</span>
      <span>{animal.avgWeight}</span>
    </div>
  );
}
