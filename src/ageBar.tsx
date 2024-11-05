import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useStore } from "./store";
import CustomTooltip from "./toolTip";

const AgeBarChart: React.FC = () => {
  const { formData } = useStore();
  const under18Count = formData.filter((data) => !data.isOver18).length;
  const over18Count = formData.filter((data) => data.isOver18).length;
  const totalCount = under18Count + over18Count;

  const data = [
    { ageGroup: "Under 18", count: under18Count },
    { ageGroup: "Over 18", count: over18Count },
  ];

  return (
    <div>
      <h1>Age Distribution</h1>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="ageGroup" />
        <YAxis />
        <Tooltip content={<CustomTooltip total={totalCount} />} />
        <Legend />
        <Bar dataKey="count" fill="#3498db" barSize={20} />
      </BarChart>
    </div>
  );
};

export default AgeBarChart;
