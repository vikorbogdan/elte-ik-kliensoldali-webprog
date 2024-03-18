import cn from "classnames";
const PlaylistListItem = ({ title, countOfSongs, isActive }) => {
  return (
    <div className={cn("item", { active: isActive })}>
      <i className="large compact disc middle aligned icon"></i>
      <div className="content">
        <a className="header">{title}</a>
        <div className="description">{countOfSongs} songs</div>
      </div>
    </div>
  );
};

export default PlaylistListItem;
