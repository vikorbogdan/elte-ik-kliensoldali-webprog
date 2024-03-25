import classNames from "classnames";

const PlaylistListItem = ({ title, numberOfTracks, isActive, action }) => {
  return (
    <div onClick={action} className={classNames("item", { active: isActive })}>
      <i className="large compact disc middle aligned icon"></i>
      <div className="content">
        <a className="header">{title}</a>
        <div className="description">{numberOfTracks} songs</div>
      </div>
    </div>
  );
};

export default PlaylistListItem;
