import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React, { useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
    },
    title: {
      display: true,
      text: "Average Price of Tickets",
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

const TicketPrice = (props: any) => {
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
      <Bar options={options} data={data} />
    </div>
  );
};

export default TicketPrice;
