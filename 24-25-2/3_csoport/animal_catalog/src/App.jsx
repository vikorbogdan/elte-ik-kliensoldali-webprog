import { animals } from "./data/animals.json";

function App() {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {animals.map((animal) => (
        <div className="flex flex-col p-4 text-center items-center border-2 rounded-2xl  border-cyan-600 w-56">
          <img
            src={animal.url}
            className="rounded-full border-2 border-cyan-600 w-24 h-24"
          />
          <h3 className="font-bold text-2xl">{animal.name}</h3>
          <span className="text-sm">{animal.diet}</span>
          <span className="text-sm">{animal.where_to_find}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
