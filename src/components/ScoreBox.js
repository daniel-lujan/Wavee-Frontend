import "./ScoreBox.css";

const ScoreBox = ({ score }) => {
  return (
    <div className="box">
      <p className="bold" style={{ fontSize: "12px" }}>
        {score}
      </p>
    </div>
  );
};

export default ScoreBox;
