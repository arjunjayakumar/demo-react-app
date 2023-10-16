import { DataPoint } from "./Chart";
import "./ChartBar.scss";

const ChartBar = ({ value, maxValue, label }: DataPoint) => {
  const barFillHeight =
    maxValue > 0 ? `${Math.round((value / maxValue) * 100)}%` : "0%";

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="char-bar__fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
