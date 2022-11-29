import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const labels = [
  "Thing 1",
  "Thing 2",
  "Thing 3",
  "Thing 4",
  "Thing 5",
  "Thing 6",
];

export const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: "rgba(177, 116, 15, 0.2)",
      borderColor: "rgba(177, 116, 15, 1)",
      borderWidth: 1,
    },
  ],
};

export default function RadarChart() {
  return <Radar data={data} width="500px" height="400px" />;
}
