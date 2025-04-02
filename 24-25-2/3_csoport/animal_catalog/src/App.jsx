import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import animalsData from "./data/animals.json";
import { AddAnimalPage } from "./pages/AddAnimalPage";
import { AnimalListPage } from "./pages/AnimalListPage";
import { MainLayout } from "./layouts/MainLayout";
function App() {
  const [animals, setAnimals] = useState(animalsData.animals);
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route index element={<AnimalListPage animals={animals} />} />
          <Route
            path="/add"
            element={
              <AddAnimalPage animals={animals} setAnimals={setAnimals} />
            }
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
