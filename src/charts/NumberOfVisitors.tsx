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
import Select from "react-select";

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
      display: false,
    },
    title: {
      display: true,
      text: "Number of Visitors",
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

const NumberOfVisitors = (props: any) => {
  const [data, setData] = useState(props.data.daily);
  const onChangeHandler = (e: any) => {
    const dataType: string = e.target.value;
    const newData = props.data[dataType];
    setData(newData);
  };
  return (
    <div>
      <div className="flex justify-end text-xs mt-2">
        <select
          name="data"
          id="data"
          className="border-0 outline-0 font-bold"
          style={{
            marginBottom: "-32px",
            zIndex: "99",
            cursor: "pointer",
          }}
          onChange={onChangeHandler}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default NumberOfVisitors;
