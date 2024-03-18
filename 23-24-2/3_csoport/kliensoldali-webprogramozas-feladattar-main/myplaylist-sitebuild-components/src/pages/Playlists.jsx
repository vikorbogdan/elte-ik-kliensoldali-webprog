import TrackDetails from "../components/TrackDetails";

const Playlists = () => {
  return (
    <div className="ui container">
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <h3>Playlists</h3>
          <div className="ui very relaxed selection list">
            <div className="item">
              <i className="large compact disc middle aligned icon"></i>
              <div className="content">
                <a className="header">Heavy Metal</a>
                <div className="description">5 songs</div>
              </div>
            </div>
            <div className="active item">
              <i className="large compact disc middle aligned icon"></i>
              <div className="content">
                <a className="header">Classics</a>
                <div className="description">4 songs</div>
              </div>
            </div>
            <div className="item">
              <i className="large compact disc middle aligned icon"></i>
              <div className="content">
                <a className="header">Movie Soundtracks</a>
                <div className="description">9 songs</div>
              </div>
            </div>
            <div className="item" id="newPlaylist">
              <i className="large green plus middle aligned icon"></i>
              <div className="content">
                <a className="header">New</a>
                <div className="description">Create a new playlist</div>
              </div>
            </div>
          </div>
        </div>
        <div className="ui ten wide column">
          <h3>Classics</h3>
          <div className="ui very relaxed selection list">
            <div className="item">
              <i className="large music middle aligned icon"></i>
              <div className="content">
                <a className="header">Highway to hell</a>
                <div className="description">AC/DC</div>
              </div>
            </div>
            <div className="item">
              <i className="large music middle aligned icon"></i>
              <div className="content">
                <a className="header">Thunderstruck</a>
                <div className="description">AC/DC</div>
              </div>
            </div>
            <div className="item">
              <i className="large music middle aligned icon"></i>
              <div className="content">
                <a className="header">Take me home country roads</a>
                <div className="description">John Denver</div>
              </div>
            </div>
            <div className="active item">
              <i className="large music middle aligned icon"></i>
              <div className="content">
                <a className="header">It&apos;s my life</a>
                <div className="description">Bon Jovi</div>
              </div>
            </div>
            <div className="item">
              <i className="large music middle aligned icon"></i>
              <div className="content">
                <a className="header">Livin&apos; on a prayer</a>
                <div className="description">Bon Jovi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui divider"></div>
      <TrackDetails />
    </div>
  );
};

export default Playlists;
