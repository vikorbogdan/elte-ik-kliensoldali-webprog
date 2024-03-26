import classNames from "classnames";
import { Link } from "react-router-dom";

const PlaylistListItem = ({ title, numberOfTracks, isActive, id }) => {
  return (
    <Link to={`/playlists/${id}`} className={classNames("item", { active: isActive })}>
      <i className="large compact disc middle aligned icon"></i>
      <div className="content">
        <span className="header">{title}</span>
        <div className="description">{numberOfTracks} songs</div>
      </div>
    </Link>
  );
};

export default PlaylistListItem;
