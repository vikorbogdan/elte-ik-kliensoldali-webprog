import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import animalsData from "./data/animals.json";
import { MainLayout } from "./layouts/MainLayout";
import { AddAnimalPage } from "./pages/AddAnimalPage";
import { AnimalListPage } from "./pages/AnimalListPage";
import { FavoriteAnimalListPage } from "./pages/FavoriteAnimalListPage";
import { FavoritesContext } from "./contexts/FavoritesContext";
import { LoginPage } from "./pages/LoginPage";

function App() {
  const [animals, setAnimals] = useState(animalsData.animals);
  const [favoriteAnimals, setFavoriteAnimals] = useState([]);

  return (
    <BrowserRouter>
      <FavoritesContext.Provider
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
            <Route path="/favorites" element={<FavoriteAnimalListPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </MainLayout>
      </FavoritesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
