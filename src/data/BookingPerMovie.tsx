const bookingData = (
  d1: number,
  d2: number,
  d3: number,
  d4: number,
  d5: number,
  d6: number
) => {
  return {
    labels: [
      "KGF 2",
      "Bhool Bhulaiyaa 2",
      "Jurassic World Domination",
      "Top Gun:Maverick",
      "Dharmaveer",
      "Doctor Strange",
    ],
    datasets: [
      {
        label: "# of Bookings",
        data: [d1, d2, d3, d4, d5, d6],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgb(255, 204, 255)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

export const getBookingData = (week: number) => {
  if (week === 1) {
    return bookingData(10, 3, 2, 8, 9, 4);
  }
  if (week === 2) {
    return bookingData(6, 5, 1, 4, 6, 8);
  }
  if (week === 3) {
    return bookingData(1, 6, 8, 3, 2, 8);
  }
  if (week === 4) {
    return bookingData(7, 3, 9, 2, 6, 3);
  }
};
