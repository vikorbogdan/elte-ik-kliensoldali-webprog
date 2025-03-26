import { animals } from "../data/animals.json";

export function AnimalListPage() {
  console.log(animals);
  return (
    <div>
      {animals.map((animal, index) => (
        <div className="p-2 border-blue-400 border-2" key={index}>
          <h2>{animal.name}</h2>
          <span>{animal.diet}</span>
          <span>{animal.location}</span>
        </div>
      ))}
    </div>
  );
}
