import "./ScoreBox.css";

const ScoreBox = ({ score }) => {
  return (
    <div className="box">
      <p className="bold" style={{ fontSize: "24px" }}>
        {score}
      </p>
    </div>
  );
};

export default ScoreBox;
