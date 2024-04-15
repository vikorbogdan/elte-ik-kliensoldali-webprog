import { useState } from "react";
import { Modal, ModalActions, ModalContent } from "semantic-ui-react";

const AddTrackModal = () => {
  const defaultState = {
    artist: "",
    title: "",
    length: "",
    thumbnailURL: "",
    spotifyURL: "",
    chordsURL: "",
    lyricsURL: "",
  };
  const [formState, setFormState] = useState(defaultState);
  const [open, setOpen] = useState(false);
  const handleChange = (key, newValue) => {
    setFormState({
      ...formState,
      [key]: newValue,
    });
  };
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <a href="#" className="ui right floated green button" id="newModal">
          <i className="plus icon"></i>
          New track
        </a>
      }
      as="form"
      className="ui modal"
    >
      <i onClick={() => setOpen(false)} className="close icon"></i>
      <div className="header">Add new Track</div>
      <ModalContent>
        <div className="description">
          <div className="ui form">
            <div className="two fields">
              <div className="field">
                <label>Author</label>
                <input
                  onChange={(e) => handleChange("artist", e.target.value)}
                  value={formState.artist}
                  type="text"
                  placeholder="John Williams"
                />
              </div>
              <div className="field">
                <label>Track name</label>
                <input
                  onChange={(e) => handleChange("title", e.target.value)}
                  value={formState.title}
                  type="text"
                  placeholder="Imperial March"
                />
              </div>
            </div>
            <div className="three fields">
              <div className="field">
                <label>Spotify URL</label>
                <input
                  onChange={(e) => handleChange("spotifyURL", e.target.value)}
                  value={formState.spotifyURL}
                  type="text"
                  placeholder="https://"
                />
              </div>
              <div className="field">
                <label>Lyrics URL</label>
                <input
                  onChange={(e) => handleChange("lyricsURL", e.target.value)}
                  value={formState.lyricsURL}
                  type="text"
                  placeholder="https://"
                />
              </div>
              <div className="field">
                <label>Guitar tab URL</label>
                <input
                  onChange={(e) => handleChange("chordsURL", e.target.value)}
                  value={formState.chordsURL}
                  type="text"
                  placeholder="https://"
                />
              </div>
            </div>
          </div>
        </div>
      </ModalContent>
      <ModalActions>
        <div onClick={() => setOpen(false)} className="ui black deny button">
          Cancel
        </div>
        <div className="ui positive right labeled icon button">
          Add
          <i className="plus icon"></i>
        </div>
      </ModalActions>
    </Modal>
  );
};

export default AddTrackModal;
