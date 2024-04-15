import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import Tracks from "./pages/Tracks";
import { examplePlaylists } from "./domain/playlist";
import { createContext, useState } from "react";

export const PlaylistContext = createContext({});

function App() {
  const [playlists, setPlaylists] = useState(examplePlaylists);
  return (
    <PlaylistContext.Provider value={{ playlists, setPlaylists }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="playlists" element={<Playlists playlists={playlists} />} />
            <Route path="playlists/:playlistId" element={<Playlists playlists={playlists} />} />
            <Route path="tracks" element={<Tracks />} />
            {/* <Route path="/*" element={<Navigate to="/" />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </PlaylistContext.Provider>
  );
}

export default App;
