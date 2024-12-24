import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const WeatherGraph = ({ data }) => {
  const labels = data.time;
  const temperatures = data.temperature_2m_mean;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Mean Temperature (°C)",
        data: temperatures,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        
      },
    ],
  };

  return <Line data={chartData} options={{ responsive: true, maintainAspectRatio: true,color: 'red' }} className="w-full md:max-w-6xl md:p-4 mx-auto mt-4 border max-h-[70vh] rounded-xl  " />;
};

export default WeatherGraph;
