import BonjoviCover from "../assets/bonjovi.jpg";
import TrackDetailButton from "./TrackDetailButton";

const TrackDetails = () => {
  return (
    <div className="ui segment">
      <div className="ui items">
        <div className="item">
          <div className="image">
            <img src={BonjoviCover} />
          </div>
          <div className="content">
            <a className="header">It&apos;s my life</a>
            <div className="meta">
              <span>Bon Jovi</span>
              <span>4:35</span>
            </div>
            <div className="extra">
              <TrackDetailButton
                url="https://open.spotify.com/track/0v1XpBHnsbkCn7iJ9Ucr1l"
                bgColor="green"
                icon="spotify"
                label="Spotify"
              />
              <TrackDetailButton
                url="https://www.azlyrics.com/lyrics/bonjovi/itsmylife.html"
                bgColor="teal"
                icon="microphone"
                label="Lyrics"
              />
              <TrackDetailButton
                url="https://tabs.ultimate-guitar.com/tab/bon-jovi/its-my-life-chords-951538"
                bgColor="orange"
                icon="guitar"
                label="Guitar chords"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackDetails;
