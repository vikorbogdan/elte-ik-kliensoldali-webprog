import cn from "classnames";

export function TrackList({ selectedPlaylist, selectedTrack, setSelectedTrack }) {
  return (
    <>
      <h3>{selectedPlaylist.title}</h3>
      <div className="ui very relaxed selection list">
        {selectedPlaylist.tracks.map((track) => (
          <div
            onClick={() => {
              setSelectedTrack(track);
            }}
            key={track.id}
            className={cn("item", { active: selectedTrack.id === track.id })}
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
