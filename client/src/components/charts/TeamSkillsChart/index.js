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
import { useQuery } from "@apollo/client";
import { GET_TEAM_SKILLS } from "../../../utils/queries";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function TeamSkillsChart() {
  const { loading, data } = useQuery(GET_TEAM_SKILLS, {
    fetchPolicy: "network-only",
  });
  const skillsData = data?.teamSkills || [];

  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);

  const chartData = {
    labels: skillsData.labels,
    datasets: [
      {
        label: "# of Team Members",
        data: skillsData.data,
        backgroundColor: `rgba(${red}, ${green}, ${blue}, 0.2)`,
        borderColor: `rgba(${red}, ${green}, ${blue}, 1)`,
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Radar data={chartData} width="500px" height="400px" />
      )}
    </>
  );
}
