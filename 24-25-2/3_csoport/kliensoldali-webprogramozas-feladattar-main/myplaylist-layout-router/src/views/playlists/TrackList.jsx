import cn from "classnames";

export function TrackList({ playlist, selectedTrack, setSelectedTrack }) {
  return (
    <>
      <h3>{playlist.title}</h3>
      <div className="ui very relaxed selection list">
        {playlist.tracks.map((track) => (
          <div
            onClick={() => setSelectedTrack(track)}
            key={track.id}
            className={cn("item", { active: selectedTrack?.id === track.id })}
          >
            <i className="large music middle aligned icon"></i>
            <div className="content">
              <div className="header">{track.title}</div>
              <div className="description">{track.artist}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
