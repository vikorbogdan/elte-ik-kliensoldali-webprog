import { useState } from "react";
import { AnimalListPage } from "./pages/AnimalListPage";
import animalsData from "./data/animals.json";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { AddAnimalPage } from "./pages/AddAnimalPage";
function App() {
  const [animals, setAnimals] = useState(animalsData.animals);
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/"> Főoldal </NavLink>
        <NavLink to="/add"> Állat hozzáadása </NavLink>
      </nav>
      <Routes>
        <Route index element={<AnimalListPage animals={animals} />} />
        <Route
          path="/add"
          element={<AddAnimalPage animals={animals} setAnimals={setAnimals} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
