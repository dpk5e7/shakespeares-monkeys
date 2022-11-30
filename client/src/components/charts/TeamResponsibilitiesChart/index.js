import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useQuery } from "@apollo/client";
import { GET_TEAM_RESPONSIBILITIES } from "../../../utils/queries";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TeamResponsibilitiesChart() {
  const { loading, error, data } = useQuery(GET_TEAM_RESPONSIBILITIES);
  const responsibilitiesData = data?.teamResponsibilities || [];

  const backgroundColors = [];
  const borderColors = [];

  if (responsibilitiesData) {
    for (let i = 0; i < responsibilitiesData?.labels?.length; i++) {
      let red = Math.round(Math.random() * 255);
      let green = Math.round(Math.random() * 255);
      let blue = Math.round(Math.random() * 255);
      backgroundColors.push(`rgba(${red}, ${green}, ${blue}, 0.2)`);
      borderColors.push(`rgba(${red}, ${green}, ${blue}, 1)`);
    }
  }

  const chartData = {
    labels: responsibilitiesData.labels,
    datasets: [
      {
        label: "# of Votes",
        data: responsibilitiesData.data,
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
        <Pie data={chartData} width="500px" height="400px" />
      )}
    </>
  );
}
