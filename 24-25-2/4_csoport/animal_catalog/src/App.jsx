import { createContext, useState } from "react";
import { AnimalListPage } from "./pages/AnimalListPage";
import animalsData from "./data/animals.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddAnimalPage } from "./pages/AddAnimalPage";
import { MainLayout } from "./layouts/MainLayout";
import { FavoriteAnimalsPage } from "./pages/FavoriteAnimalsPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const [animals, setAnimals] = useState(animalsData.animals);
  const [favoriteAnimals, setFavoriteAnimals] = useState([]);
  return (
    <BrowserRouter>
      <FavoriteContext.Provider
        value={{
          favoriteAnimals,
          setFavoriteAnimals,
        }}
      >
        <MainLayout>
          <Routes>
            <Route index element={<AnimalListPage animals={animals} />} />
            <Route
              path="/add"
              element={
                <AddAnimalPage animals={animals} setAnimals={setAnimals} />
              }
            />
            <Route path="/favorites" element={<FavoriteAnimalsPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </MainLayout>
      </FavoriteContext.Provider>
    </BrowserRouter>
  );
}

export default App;
