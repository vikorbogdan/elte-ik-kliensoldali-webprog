import { useState } from "react";
import PlaylistListItem from "./PlaylistListItem";

const PlaylistList = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(2);
  return (
    <div className="ui six wide column">
      <h3>Playlists</h3>
      <div className="ui very relaxed selection list">
        {data.map((elem) => (
          <PlaylistListItem
            action={() => setActiveIndex(elem.id)}
            id={elem.id}
            isActive={activeIndex === elem.id}
            key={elem.id}
            title={elem.title}
            numberOfTracks={elem.tracks.length}
          />
        ))}
        <div className="item" id="newPlaylist">
          <i className="large green plus middle aligned icon"></i>
          <div className="content">
            <a className="header">New</a>
            <div className="description">Create a new playlist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistList;
