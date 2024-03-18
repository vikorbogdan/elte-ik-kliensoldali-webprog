const TrackDetailsButton = ({ url, bgColor, icon, text }) => {
  return (
    <a href={url} className={`ui button tiny ${bgColor} button`} target="_blank" rel="noreferrer">
      <i className={`${icon} icon`}></i>
      {text}
    </a>
  );
};

export default TrackDetailsButton;
