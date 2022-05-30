export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export const genreData = {
  labels,
  datasets: [
    {
      label: "Foreign",
      data: [200, 180, 210, 250, 500, 400, 520],
      borderColor: "black",
      backgroundColor: "rgba(78, 202, 207,0.5)",
      fill: true,
    },
    {
      label: "Regional",
      data: [250, 230, 280, 240, 190, 195, 180],
      borderColor: "white",
      backgroundColor: "rgba(10, 134, 139,0.5)",
      fill: true,
    },
  ],
};
