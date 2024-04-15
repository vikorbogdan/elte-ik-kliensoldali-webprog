import { useParams } from "react-router-dom";
import PlaylistList from "../components/PlaylistList";
import TrackDetails from "../components/TrackDetails";
import TrackList from "../components/TrackList";

const Playlists = ({ playlists }) => {
  const { playlistId } = useParams();
  const selectedPlaylist = playlists.find((elem) => elem.id.toString() === playlistId);
  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <PlaylistList playlistId={playlistId} data={playlists} />
        {selectedPlaylist && <TrackList playlistTitle={selectedPlaylist.title} data={selectedPlaylist.tracks} />}
      </div>
      <div className="ui divider"></div>
      <TrackDetails />
    </div>
  );
};

export default Playlists;
