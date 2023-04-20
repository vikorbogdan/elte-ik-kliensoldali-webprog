import { useState } from "react";
import { animals } from "./data/animals.json";
import AnimalList from "./components/AnimalList/AnimalList";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import AddAnimal from "./components/AddAnimal/AddAnimal";
import Navbar from "./components/Navbar";
import AnimalContext from "./context/AnimalContext";
function App() {
  // Nyisd meg a fejlesztői konzolt, hogy megtekinthesd az adatokat tartalmazó JSON felépítését!
  const [animalList, setAnimalList] = useState(animals);
  return (
    <>
      <Navbar />
      <AnimalContext.Provider value={animalList}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/list"
            element={<AnimalList animalList={animalList} />}
          />
          <Route
            path="/add"
            element={
              <AddAnimal
                animalList={animalList}
                setAnimalList={setAnimalList}
              />
            }
          />
        </Routes>
      </AnimalContext.Provider>
    </>
  );
}

export default App;
