import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useAppDispatch } from "../redux/hooks";
import { getBookingsPerMovie } from "../redux/dataSlice";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
      color: "black",
    },
  },
};

const TicketsPerMovie = (props: any) => {
  const dispatch = useAppDispatch();
  //   const [data, setData] = useState(props.data);
  const onChangeHandler = (e: any) => {
    // const dataType: string = e.target.value;
    // const newData = props.data[dataType];
    // setData(newData);
    console.log("This is value", e.target.value);
    dispatch(getBookingsPerMovie(e.target.value));
    console.log("This is data", props.data);
  };
  console.log("This is data", props.data);
  return (
    <div>
      <div className="flex justify-end text-xs">
        <select
          name="data"
          id="data"
          className="border-0 outline-0 font-bold"
          onChange={onChangeHandler}
        >
          <option value="1">Week 1</option>
          <option value="2">Week 2</option>
          <option value="3">Week 3</option>
          <option value="4">Week 4</option>
        </select>
      </div>
      <Pie data={props.data} options={options} />
    </div>
  );
};

export default TicketsPerMovie;
