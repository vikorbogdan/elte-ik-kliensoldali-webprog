import BonJovi from "../assets/bonjovi.jpg";
import TrackDetailsButton from "./TrackDetailsButton";
const TrackDetails = () => {
  return (
    <div className="ui segment">
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src={BonJovi} />
          </div>
          <div className="content">
            <a className="header">It&apos;s my life</a>
            <div className="meta">
              <span>Bon Jovi</span>
              <span>4:35</span>
            </div>
            <div className="extra">
              <TrackDetailsButton
                url="https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l"
                bgColor="green"
                icon="spotify"
                text="Spotify"
              />
              <TrackDetailsButton
                url="https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html"
                bgColor="teal"
                icon="microphone"
                text="Lyrics"
              />
              <TrackDetailsButton
                url="https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-tabs-17509"
                bgColor="orange"
                icon="guitar"
                text="Chords"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackDetails;
