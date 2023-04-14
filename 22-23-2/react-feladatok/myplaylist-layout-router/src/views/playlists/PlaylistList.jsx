/* eslint-disable react/prop-types */
import cn from "classnames";
import { useNavigate } from "react-router-dom";

export function PlaylistList({ playlists, selectedPlaylistId, setSelectedPlaylistId }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    setSelectedPlaylistId(id);
    navigate(`/playlists/${id}`);
  };

  return (
    <div className="ui very relaxed selection list">
      {playlists.map((playlist) => (
        <div
          onClick={() => handleClick(playlist.id)}
          className={cn("item", { active: playlist.id === selectedPlaylistId })}
          key={playlist.id}
        >
          <i className="large compact disc middle aligned icon"></i>
          <div className="content">
            <div className="header">{playlist.title}</div>
            <div className="description">{playlist.tracks.length} songs</div>
          </div>
        </div>
      ))}
    </div>
  );
}
