import { AddAnimalForm } from "../components/AddAnimalForm";

export function AddAnimalPage({ animals, setAnimals }) {
  return (
    <div>
      <AddAnimalForm animals={animals} setAnimals={setAnimals} />
    </div>
  );
}
