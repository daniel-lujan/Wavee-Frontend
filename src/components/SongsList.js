import { useState } from "react";
import "./SongsList.css";
import Icon from "./icons/Icon";
import { SONGS } from "../api/songsDB";

const SongRecord = ({ id, title, artist, cover, spotifyLink }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className={`song-record${hover ? " spotify" : ""}`}>
      <div className="song-content">
        <img className="song-cover" src={cover} alt={title} />
        <div className="song-info">
          <p>
            <b>{title}</b>
          </p>
          <p>{artist}</p>
        </div>
      </div>
      <a
        href={spotifyLink}
        target="_blank"
        rel="noreferrer"
        style={{ lineHeight: 0 }}
      >
        <Icon
          icon="spotify"
          className="spotify-icon"
          size={48}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />
      </a>
    </div>
  );
};

const SongsList = () => {
  return (
    <div className="songs-container">
      <h1 className="thin title">
        INDEXED <b className="green regular">SONGS</b>
      </h1>
      <div className="songs-list">
        {SONGS.map((song) => (
          <SongRecord key={song.id} {...song} />
        ))}
      </div>
    </div>
  );
};

export default SongsList;
