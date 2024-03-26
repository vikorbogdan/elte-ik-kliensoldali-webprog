import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Playlists from "./pages/Playlists";
import Tracks from "./pages/Tracks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="playlists" element={<Playlists />} />
          <Route path="playlists/:playlistId" element={<Playlists />} />
          <Route path="tracks" element={<Tracks />} />
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
