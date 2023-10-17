import "./Chart.scss";
import ChartBar from "./ChartBar";

interface ChildProps {
  dataPoints: DataPoint[];
}

interface DataPoint {
  value: number;
  label: string;
}

const Chart = ({ dataPoints }: ChildProps) => {
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value),
    totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint?.value}
          maxValue={totalMaximum}
          label={dataPoint?.label}
          key={dataPoint?.label}
        />
      ))}
    </div>
  );
};

export default Chart;
