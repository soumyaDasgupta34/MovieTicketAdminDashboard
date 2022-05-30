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
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      color: "black",
    },
    title: {
      display: true,
      text: "Foreign Vs Regional Bookings",
      color: "black",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
        borderColor: "black",
      },
      ticks: {
        color: "black",
      },
    },
    Y: {
      grid: {
        color: "black",
        display: false,
        borderColor: "black",
      },
      ticks: {
        color: "black",
      },
    },
  },
};

const GenreBookings = (props: any) => {
  return <Line data={props.data} options={options} />;
};

export default GenreBookings;
