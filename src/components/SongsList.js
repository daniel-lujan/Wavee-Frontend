import "./SongsList.css";
import { SONGS } from "../api/songsDB";
import Song from "./Song";

const SongsList = () => {
  return (
    <div className="songs-container">
      <h1 className="thin title">
        LISTA DE <b className="extrabold green">CANCIONES</b>
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
