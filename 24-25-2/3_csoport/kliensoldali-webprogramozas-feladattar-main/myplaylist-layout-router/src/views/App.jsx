import { Home } from "./home/Home";
import { MainLayout } from "./layouts/MainLayout";
import { Playlists } from "./playlists/Playlists";
import { Search } from "./search/Search";
import { Tracks } from "./tracks/Tracks";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlists/:selectedPlaylistId" element={<Playlists />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
