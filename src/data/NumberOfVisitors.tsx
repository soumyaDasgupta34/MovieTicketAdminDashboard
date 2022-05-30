export const visitorData = {
  daily: {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
    datasets: [
      {
        label: "Visitors",
        data: [250, 300, 150, 450, 200, 250, 500, 600],
        backgroundColor: "#4cc8cd",
      },
    ],
  },
  weekly: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        label: "Visitors",
        data: [1500, 1800, 1450, 1250, 3200, 2600, 5000, 1600],
        backgroundColor: "#4cc8cd",
        color: "red",
      },
    ],
  },
  monthly: {
    labels: ["JAN", "FEB", "MAR", "APR", "MAY"],
    datasets: [
      {
        label: "Visitors",
        data: [25000, 30000, 15000, 45000, 32000],
        backgroundColor: "#4cc8cd",
      },
    ],
  },
};
