import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useQuery } from "@apollo/client";
import { GET_TEAM_PERSONAL_INTERESTS } from "../../../utils/queries";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function TeamPersonalInterestsChart() {
  const { loading, data } = useQuery(GET_TEAM_PERSONAL_INTERESTS, {
    fetchPolicy: "network-only",
  });
  const interestsData = data?.teamPersonalInterests || [];

  const backgroundColors = [];

  if (interestsData) {
    for (let i = 0; i < interestsData?.labels?.length; i++) {
      let red = Math.round(Math.random() * 255);
      let green = Math.round(Math.random() * 255);
      let blue = Math.round(Math.random() * 255);
      backgroundColors.push(`rgba(${red}, ${green}, ${blue}, 0.5)`);
    }
  }

  const chartData = {
    labels: interestsData.labels,
    datasets: [
      {
        label: "# of Team Members",
        data: interestsData.data,
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Doughnut data={chartData} width="500px" height="400px" />
      )}
    </>
  );
}
