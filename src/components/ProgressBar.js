import "./ProgressBar.css";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <p className="bold">{percentage}%</p>
      <div
        className="progress-bar-fill"
        style={{ width: percentage + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
