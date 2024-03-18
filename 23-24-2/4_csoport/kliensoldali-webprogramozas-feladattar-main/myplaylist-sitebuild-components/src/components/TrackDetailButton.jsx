const TrackDetailButton = ({ url, bgColor, icon, label }) => {
  return (
    <a href={url} className={`ui button tiny ${bgColor} button`} target="_blank" rel="noreferrer">
      <i className={`${icon} icon`}></i>
      {label}
    </a>
  );
};

export default TrackDetailButton;
