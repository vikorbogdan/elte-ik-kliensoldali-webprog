import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import Tracks from "./pages/Tracks";
import { examplePlaylists } from "./domain/playlist";
import { useState } from "react";

function App() {
  const [playlists, setPlaylists] = useState(examplePlaylists);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="playlists" element={<Playlists setPlaylists={setPlaylists} playlists={playlists} />} />
          <Route
            path="playlists/:playlistId"
            element={<Playlists setPlaylists={setPlaylists} playlists={playlists} />}
          />
          <Route path="tracks" element={<Tracks />} />
          {/* <Route path="/*" element={<Navigate to="/" replace={true} />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
