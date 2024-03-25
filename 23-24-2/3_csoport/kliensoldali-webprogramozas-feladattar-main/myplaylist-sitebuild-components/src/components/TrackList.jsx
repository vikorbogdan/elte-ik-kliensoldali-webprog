const TrackList = ({ tracks, playlistTitle }) => {
  return (
    <div className="ui ten wide column">
      <h3>{playlistTitle}</h3>
      <div className="ui very relaxed selection list">
        {tracks.map((track) => (
          <div key={track.id} className="item">
            <i className="large music middle aligned icon"></i>
            <div className="content">
              <span className="header">{track.title}</span>
              <div className="description">{track.artist}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrackList;
