function ProgressBar({ current, total }) {
  const percentage = ((current + 1) / total) * 100;

  return (
    <div>
      <p className="progress-text">
        Card {current + 1} of {total}
      </p>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;