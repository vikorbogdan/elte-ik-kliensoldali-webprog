import { useContext } from "react";
import { FavoritesContext } from "../contexts/FavoritesContext";

export function AnimalListItem({ animal, withFavoriteButton }) {
  const { favoriteAnimals, setFavoriteAnimals } = useContext(FavoritesContext);

  const isFavorite = favoriteAnimals.some((elem) => elem.name === animal.name);

  function handleFavoriteClick() {
    if (isFavorite) {
      setFavoriteAnimals(
        favoriteAnimals.filter((elem) => elem.name !== animal.name)
      );
    } else {
      setFavoriteAnimals([...favoriteAnimals, animal]);
    }
  }
  return (
    <div className="flex flex-col relative p-4 text-center items-center border-2 rounded-2xl  border-cyan-600 w-56">
      {withFavoriteButton && (
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 cursor-pointer hover:scale-105 active:scale-95 transition-transform right-2 rounded-full w-10 h-10 bg-blue-400"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      )}
      <img
        src={animal.img}
        className="rounded-full border-2 border-cyan-600 w-24 h-24 object-cover"
      />
      <h3 className="font-bold text-2xl">{animal.name}</h3>
      <span className="text-sm">{animal.diet}</span>
      <span className="text-sm">{animal.avgWeight}</span>
      <span className="text-sm">{animal.avgLifespan} </span>
    </div>
  );
}
