import "./SongsList.css";
import { SONGS } from "../api/songsDB";
import Song from "./Song";

const SongsList = () => {
  return (
    <div className="songs-container">
      <h1 className="thin title">
        <a
          className="highlight"
          href="https://spotify.com"
          target="_blank"
          rel="noreferrer"
        >
          <b className="bold green">SPOTIFY </b> PLAYLIST
        </a>
      </h1>
      <div className="songs-list">
        {SONGS.map((song) => (
          <Song key={song.id} {...song} />
        ))}
      </div>
    </div>
  );
};

export default SongsList;
