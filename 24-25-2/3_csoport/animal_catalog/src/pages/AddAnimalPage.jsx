import { AddAnimalForm } from "../components/AddAnimalForm";

export function AddAnimalPage({ animals, setAnimals }) {
  return (
    <div className="flex flex-col items-center">
      <AddAnimalForm animals={animals} setAnimals={setAnimals} />
    </div>
  );
}
