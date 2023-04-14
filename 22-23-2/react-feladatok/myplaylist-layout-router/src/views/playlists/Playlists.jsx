import { PlaylistForm } from "./PlaylistForm";
import { PlaylistList } from "./PlaylistList";
import { TrackList } from "./TrackList";
import { TrackDetails } from "./TrackDetails";

import { examplePlaylists } from "../../domain/playlist";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const Playlists = () => {
  // const selectedPlaylistId = 1;

  const { playlistId } = useParams();
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(parseInt(playlistId));
  const playlists = examplePlaylists;
  // Computed values
  const selectedPlaylist = playlists.find((pl) => pl.id === selectedPlaylistId);
  console.log(selectedPlaylist);

  return (
    <>
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <h3>Playlists</h3>
          <PlaylistForm />
          <PlaylistList
            setSelectedPlaylistId={setSelectedPlaylistId}
            playlists={playlists}
            selectedPlaylistId={selectedPlaylistId}
          />
        </div>
        <div className="ui ten wide column">
          <TrackList items={selectedPlaylist.tracks} />
        </div>
      </div>
      <div className="ui divider"></div>
      <TrackDetails />
    </>
  );
};
