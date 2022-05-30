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
import { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
      display: false,
      color: "black",
    },
    title: {
      display: true,
      text: "Ticket Bookings",
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

const labels = [
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hydrebad",
  "Mumbai",
  "Delhi",
  "Pune",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Tickets Booked",
      data: [2500, 1800, 1200, 2300, 2800, 2600, 1950],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const BookingsPerLocation = (props: any) => {
  const [data, setData] = useState(props.data.Bangalore);
  const onChangeHandler = (e: any) => {
    const dataType: string = e.target.value;
    const newData = props.data[dataType];
    setData(newData);
  };
  return (
    <div>
      <div className="flex justify-end text-xs">
        <select
          name="data"
          id="data"
          className="border-0 outline-0 font-bold"
          onChange={onChangeHandler}
          style={{
            marginBottom: "-32px",
            zIndex: "99",
            cursor: "pointer",
          }}
        >
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Hydrebad">Hydrebad</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default BookingsPerLocation;
