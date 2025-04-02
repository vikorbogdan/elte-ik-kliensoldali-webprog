export function AnimalListPage({ animals }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {animals.map((animal, index) => (
        <div
          key={index}
          className="flex flex-col p-4 text-center items-center border-2 rounded-2xl  border-cyan-600 w-56"
        >
          <img
            src={animal.img}
            className="rounded-full border-2 border-cyan-600 w-24 h-24 object-cover"
          />
          <h3 className="font-bold text-2xl">{animal.name}</h3>
          <span className="text-sm">{animal.diet}</span>
          <span className="text-sm">{animal.avgWeight}</span>
          <span className="text-sm">{animal.avgLifespan} </span>
        </div>
      ))}
    </div>
  );
}
