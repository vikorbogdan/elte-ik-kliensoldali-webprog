import { examplePlaylists } from "../domain/playlist";
import PlaylistListItem from "./PlaylistListItem";

const PlaylistList = ({ activePlaylistId }) => {
  return (
    <div className="ui six wide column">
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
        {examplePlaylists.map((elem) => (
          <PlaylistListItem
            id={elem.id}
            isActive={elem.id.toString() === activePlaylistId}
            key={elem.id}
            title={elem.title}
            countOfSongs={elem.tracks.length}
          />
        ))}

        <div className="item" id="newPlaylist">
          <i className="large green plus middle aligned icon"></i>
          <div className="content">
            <a className="header">New</a>
            <div className="description">Create a new playlist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistList;
