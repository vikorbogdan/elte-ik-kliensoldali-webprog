export function AnimalListPage({ animals }) {
  return (
    <>
      <div className="flex gap-6 flex-wrap justify-center bg-red-50">
        {animals.map((animal, index) => (
          <div
            className="p-4 w-56 bg-white shadow-lg rounded-xl flex flex-col items-center"
            key={index}
          >
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
        ))}
      </div>
    </>
  );
}
