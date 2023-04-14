import { Playlists } from "./playlists/Playlists";
import { Home } from "./home/Home";
// import { Tracks } from "./tracks/Tracks";
// import { Search } from "./search/Search";
// import { Menu } from "./menu/Menu";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Playlists />} path="/playlists">
          <Route path=":playlistId" element={<Playlists />} />
        </Route>
      </Routes>
    </Layout>
  );
}
