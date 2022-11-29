import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  
export const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: labels.map(() => Math.floor(Math.random() * 12)),
      backgroundColor: [
        "rgba(255, 99, 132, 0.5)",
        "rgba(54, 162, 235, 0.5)",
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",
        "rgba(153, 102, 255, 0.5)",
        "rgba(255, 159, 64, 0.5)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function PolarAreaChart() {
  return <PolarArea data={data} width="500px" height="400px" />;
}
