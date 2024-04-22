import { useContext } from "react";
import AddPlaylistModal from "./AddPlaylistModal";
import PlaylistListItem from "./PlaylistListItem";
import { PlaylistContext } from "../App";
const PlaylistList = ({ activePlaylistId }) => {
  const { playlists } = useContext(PlaylistContext);
  return (
    <div className="ui six wide column">
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
        {playlists.map((elem) => (
          <PlaylistListItem
            id={elem.id}
            isActive={elem.id.toString() === activePlaylistId}
            key={elem.id}
            title={elem.title}
            countOfSongs={elem.tracks.length}
          />
        ))}
        <AddPlaylistModal />
      </div>
    </div>
  );
};

export default PlaylistList;
