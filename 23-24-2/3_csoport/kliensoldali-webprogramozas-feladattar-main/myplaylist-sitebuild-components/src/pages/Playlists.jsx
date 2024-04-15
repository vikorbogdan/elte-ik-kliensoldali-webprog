import { useParams } from "react-router-dom";
import PlaylistList from "../components/PlaylistList";
import TrackDetails from "../components/TrackDetails";
import TrackList from "../components/TrackList";

const Playlists = ({ playlists, setPlaylists }) => {
  const { playlistId } = useParams();
  console.log(playlists);
  const selectedPlaylist = playlists.find((elem) => elem.id.toString() === playlistId);
  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <PlaylistList setPlaylists={setPlaylists} playlists={playlists} activePlaylistId={playlistId} />
        {selectedPlaylist && <TrackList playlistTitle={selectedPlaylist.title} tracks={selectedPlaylist.tracks} />}
      </div>
      <div className="ui divider"></div>
      <TrackDetails />
    </div>
  );
};

export default Playlists;
