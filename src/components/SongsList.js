import "./SongsList.css";
import { PLAYLIST_URL, SONGS } from "../api/songsDB";
import Song from "./Song";

const SongsList = () => {
  return (
    <div className="songs-container">
      <h1 className="thin title">
        <a
          className="highlight"
          href={PLAYLIST_URL}
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
