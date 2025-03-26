import { PlaylistForm } from "./PlaylistForm";
import { PlaylistList } from "./PlaylistList";
import { TrackDetails } from "./TrackDetails";
import { TrackList } from "./TrackList";

import { useParams } from "react-router-dom";
import { examplePlaylists } from "../../domain/playlist";

export const Playlists = () => {
  // const selectedPlaylistId = 1;
  const playlists = examplePlaylists;
  const { selectedPlaylistId } = useParams();
  // Computed values
  // const selectedPlaylist = playlists.find((pl) => pl.id === selectedPlaylistId);

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
          <TrackList />
        </div>
      </div>
      <div className="ui divider"></div>
      <TrackDetails />
    </div>
  );
};
