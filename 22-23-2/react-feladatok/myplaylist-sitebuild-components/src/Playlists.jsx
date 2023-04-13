/* eslint-disable react/no-unescaped-entities */
import BonJovi from "./assets/img/bonjovi.jpg";
import { examplePlaylists } from "./domain/playlist";
import classNames from "classnames";
const Playlists = () => {
  const selectedListElement = 1;
  const playlistListElements = examplePlaylists.map((el, ind) => (
    <div key={ind} className={`item ${classNames({ active: el.id === selectedListElement })}`}>
      <i className="large compact disc middle aligned icon"></i>
      <div className="content">
        <a className="header">{el.title}</a>
        <div className="description">{el.tracks.length} songs</div>
      </div>
    </div>
  ));
  return (
    <>
      <h1>My Playlists</h1>
      <div className="ui stackable two column grid">
        <div className="ui six wide column">
          <h3>Playlists</h3>
          <div className="ui very relaxed selection list">{playlistListElements}</div>
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
                <a className="header">It's my life</a>
                <div className="description">Bon Jovi</div>
              </div>
            </div>
            <div className="item">
              <i className="large music middle aligned icon"></i>
              <div className="content">
                <a className="header">Livin' on a prayer</a>
                <div className="description">Bon Jovi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ui divider"></div>
      <div className="ui segment">
        <div className="ui items">
          <div className="item">
            <div className="image">
              <img src={BonJovi} />
            </div>
            <div className="content">
              <a className="header">It's my life</a>
              <div className="meta">
                <span>Bon Jovi</span>
                <span>4:35</span>
              </div>
              <div className="extra">
                <a
                  href="https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l"
                  className="ui button tiny green button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="spotify icon"></i>
                  Listen on Spotify
                </a>
                <a
                  href="https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538"
                  className="ui button tiny teal button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="microphone icon"></i>
                  Show lyrics
                </a>
                <a
                  href="https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html"
                  className="ui button tiny orange button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="guitar icon"></i>
                  Show chords
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playlists;
