import { PlaylistForm } from "./PlaylistForm";
import { PlaylistList } from "./PlaylistList";
import { TrackDetails } from "./TrackDetails";
import { TrackList } from "./TrackList";

import { useParams } from "react-router-dom";
import { examplePlaylists } from "../../domain/playlist";
import { useState } from "react";

export const Playlists = () => {
  const { selectedPlaylistId } = useParams();
  const playlists = examplePlaylists;
  const [selectedTrack, setSelectedTrack] = useState({});
  const selectedPlaylistObject = playlists.find((playlist) => playlist.id === parseInt(selectedPlaylistId));
  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <h3>Playlists</h3>
          <PlaylistForm />
          <PlaylistList playlists={playlists} selectedPlaylistId={parseInt(selectedPlaylistId)} />
        </div>
        <div className="ui ten wide column">
          <TrackList
            selectedTrack={selectedTrack}
            setSelectedTrack={setSelectedTrack}
            selectedPlaylist={selectedPlaylistObject}
          />
        </div>
      </div>
      <div className="ui divider"></div>
      <TrackDetails />
    </div>
  );
};
