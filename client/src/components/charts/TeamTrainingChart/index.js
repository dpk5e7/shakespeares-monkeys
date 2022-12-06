import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { useQuery } from "@apollo/client";
import { GET_TEAM_TRAINING } from "../../../utils/queries";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TeamTrainingChart() {
  const { loading, data } = useQuery(GET_TEAM_TRAINING, {
    fetchPolicy: "network-only",
  });
  const trainingData = data?.teamTraining || [];

  const backgroundColors = [];
  const borderColors = [];

  if (trainingData) {
    for (let i = 0; i < trainingData?.labels?.length; i++) {
      let red = Math.round(Math.random() * 255);
      let green = Math.round(Math.random() * 255);
      let blue = Math.round(Math.random() * 255);
      backgroundColors.push(`rgba(${red}, ${green}, ${blue}, 0.2)`);
      borderColors.push(`rgba(${red}, ${green}, ${blue}, 1)`);
    }
  }

  const chartData = {
    labels: trainingData.labels,
    datasets: [
      {
        label: "# of Team Members",
        data: trainingData.data,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <PolarArea data={chartData} width="500px" height="400px" />
      )}
    </>
  );
}
