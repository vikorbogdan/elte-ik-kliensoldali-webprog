import AnimalCard from "./AnimalCard";

const AnimalList = ({ animalList }) => {
  return (
    <div className="bg-yellow-100 w-full items-center flex flex-col font-nunito">
      <h1 className="text-yellow-800 mt-5 text-5xl font-bold">AniDex</h1>
      <div
        id="animal-container"
        className="mt-5 flex items-center justify-center flex-row flex-wrap gap-10 "
      >
        {animalList.map((animal) => (
          <AnimalCard {...animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
