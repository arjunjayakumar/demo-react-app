import "./Chart.scss";
import ChartBar from "./ChartBar";

interface ChildProps {
  dataPoints: DataPoint[];
}

export interface DataPoint {
  value: number;
  maxValue: number;
  label: string;
}

const Chart = ({ dataPoints }: ChildProps) => {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint?.value}
          maxValue={0}
          label={dataPoint?.label}
          key={dataPoint?.label}
        />
      ))}
    </div>
  );
};

export default Chart;
