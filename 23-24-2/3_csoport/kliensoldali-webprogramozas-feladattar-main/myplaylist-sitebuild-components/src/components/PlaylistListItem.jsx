import cn from "classnames";
import { Link } from "react-router-dom";
const PlaylistListItem = ({ title, countOfSongs, isActive, id }) => {
  return (
    <Link to={`/playlists/${id}`} className={cn("item", { active: isActive })}>
      <i className="large compact disc middle aligned icon"></i>
      <div className="content">
        <span className="header">{title}</span>
        <div className="description">{countOfSongs} songs</div>
      </div>
    </Link>
  );
};

export default PlaylistListItem;
