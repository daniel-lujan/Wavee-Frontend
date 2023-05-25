import { useState } from "react";
import Icon from "./icons/Icon";
import "./SongsList.css";
import ScoreBox from "./ScoreBox";
import ProgressBar from "./ProgressBar";

const Song = ({ id, title, artist, cover, spotifyLink, score, highlight }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`song-record${hover ? " spotify" : ""}${
        highlight ? " highlight" : ""
      }`}
    >
      <div className="song-content">
        <img className="song-cover" src={cover} alt={title} />
        <div className="song-info">
          <p>
            <b>{title}</b>
          </p>
          <p>{artist}</p>
        </div>
      </div>
      <div
        style={{
          lineHeight: 0,
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {/* {score && <ScoreBox score={score} />} */}
        {score && <ProgressBar percentage={score} />}
        <a
          href={spotifyLink}
          target="_blank"
          rel="noreferrer"
          style={{ lineHeight: 0 }}
        >
          <Icon
            icon="spotify"
            className="spotify-icon"
            size={36}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          />
        </a>
      </div>
    </div>
  );
};

export default Song;
