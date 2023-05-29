import ProgressBar from "./ProgressBar";
import "./SongsList.css";
import Icon from "./icons/Icon";

const Song = ({ id, title, artist, cover, score, highlight }) => {
  return (
    <div className={`song-record${highlight ? " highlight" : ""}`}>
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
          marginRight: "16px",
        }}
      >
        {highlight && (
          <Icon icon="awardFilled" style={{ color: "var(--spotify-color)" }} />
        )}
        {score && <ProgressBar percentage={Math.round(score * 100)} />}
      </div>
    </div>
  );
};

export default Song;
