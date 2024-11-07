import React from "react";
import { TooltipProps } from "recharts";
import "./App.css";

interface CustomTooltipProps extends TooltipProps<number, string> {
  total: number;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
  total,
}) => {
  if (active && payload && payload.length) {
    const count = payload[0].value as number;
    const percentage = ((count / total) * 100).toFixed(2);

    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "var(--tooltip-bg-color, #f4f4f4)",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid var(--tooltip-border-color, #ccc)",
          color: "var(--tooltip-text-color, #333)",
        }}
      >
        <p className="label" style={{ fontWeight: "bold" }}>
          {label}
        </p>
        <p className="count">Count: {count}</p>
        <p className="percentage">Percentage: {percentage}%</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
