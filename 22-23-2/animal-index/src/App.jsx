import { useState } from "react";
import { animals } from "./data/animals.json";
import AnimalList from "./components/AnimalList/AnimalList";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import AddAnimal from "./components/AddAnimal/AddAnimal";
import Navbar from "./components/Navbar";
import AnimalContext from "./context/AnimalContext";
import { UserContext } from "./context/UserContext";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  // Nyisd meg a fejlesztői konzolt, hogy megtekinthesd az adatokat tartalmazó JSON felépítését!
  const [animalList, setAnimalList] = useState(animals);
  const [user, setUser] = useState("");
  return (
    <>
      <UserContext.Provider value={[user, setUser]}>
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
                <ProtectedRoute user={user}>
                  <AddAnimal
                    animalList={animalList}
                    setAnimalList={setAnimalList}
                  />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </AnimalContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
