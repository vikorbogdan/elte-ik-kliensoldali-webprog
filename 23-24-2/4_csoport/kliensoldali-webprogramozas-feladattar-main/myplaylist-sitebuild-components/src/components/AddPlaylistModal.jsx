import { useContext, useState } from "react";
import { Button, Modal, ModalActions, ModalContent, ModalHeader } from "semantic-ui-react";
import { PlaylistContext } from "../App";

const AddPlaylistModal = () => {
  const { playlists, setPlaylists } = useContext(PlaylistContext);
  const [open, setOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [error, setError] = useState(false);
  const handleInputChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(playlistName);

    setError(!playlistName);

    if (playlistName) {
      const newPlaylist = {
        id: playlists.length + 1,
        title: playlistName,
        tracks: [],
      };
      setPlaylists([...playlists, newPlaylist]);
      setOpen(false);
      setPlaylistName("");
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <div className="item" id="newPlaylist">
          <i className="large green plus middle aligned icon"></i>
          <div className="content">
            <a className="header">New</a>
            <div className="description">Create a new playlist</div>
          </div>
        </div>
      }
    >
      <ModalHeader>Add new Playlist</ModalHeader>
      <ModalContent>
        <form onSubmit={handleSubmit} className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              required={error}
              value={playlistName}
              onChange={handleInputChange}
              type="text"
              placeholder="My Playlist"
            />
            {error && (
              <div style={{ color: "red" }}>
                <p>The field is required.</p>
              </div>
            )}
          </div>
        </form>
      </ModalContent>
      <ModalActions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button content="Add" labelPosition="right" icon="plus" onClick={handleSubmit} positive />
      </ModalActions>
    </Modal>
  );
};

export default AddPlaylistModal;
