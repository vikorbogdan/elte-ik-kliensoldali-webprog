import { useRef, useState } from "react";
import { Button, Modal, ModalActions, ModalContent, ModalDescription, ModalHeader } from "semantic-ui-react";

const AddPlaylistModal = ({ playlists, setPlaylists }) => {
  const [open, setOpen] = useState(false);
  const [playlistName, setPlaylistName] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setPlaylistName(e.target.value);
  };
  const formRef = useRef(null);
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
      <ModalHeader>Add a New Playlist</ModalHeader>
      <ModalContent image>
        <ModalDescription>
          <form ref={formRef} onSubmit={handleSubmit} className="ui form">
            <div className="field">
              <label>Name</label>
              <div className={error && "ui input error"}>
                <input value={playlistName} onChange={handleInputChange} type="text" placeholder="My Playlist" />
                {error && <p style={{ color: "red" }}>Playlist name is required!</p>}
              </div>
            </div>
          </form>
        </ModalDescription>
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
