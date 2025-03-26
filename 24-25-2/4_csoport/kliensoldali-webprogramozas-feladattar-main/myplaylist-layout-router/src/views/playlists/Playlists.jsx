import { PlaylistForm } from "./PlaylistForm";
import { PlaylistList } from "./PlaylistList";
import { TrackList } from "./TrackList";
import { TrackDetails } from "./TrackDetails";

import { examplePlaylists } from "../../domain/playlist";
import { useState } from "react";

export const Playlists = () => {
  // const selectedPlaylistId = 1;
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(1);
  const playlists = examplePlaylists;
  // Computed values
  const selectedPlaylist = playlists.find((pl) => pl.id === selectedPlaylistId);

  function handleClick(id) {
    setSelectedPlaylistId(id);
  }

  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <h3>Playlists</h3>
          <PlaylistForm />
          <PlaylistList onClick={handleClick} playlists={playlists} selectedPlaylistId={selectedPlaylistId} />
        </div>
        <div className="ui ten wide column">
          <TrackList />
        </div>
      </div>
      <div className="ui divider"></div>
      <TrackDetails />
    </div>
  );
};
