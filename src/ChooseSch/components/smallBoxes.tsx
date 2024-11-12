import React, { useState } from "react";
import "../style.css";
import { useDispatch } from "react-redux";
import { setdate, setweekday } from "../../Redux/slice/chooseSchSlice";

interface SmallType {
  date: string;
  weekday: string;
  flag: boolean;
  selected: boolean; // to track if this box is selected
  onSelect: () => void;
}

export default function SmallBoxes({
  date,
  weekday,
  flag,
  selected,
  onSelect,
}: SmallType) {
  // const [selected, setselected] = useState(false)

  const dispatch = useDispatch();

  const handledatedata = () => {
    onSelect();

    if (!selected) {
      dispatch(setdate(date));
      dispatch(setweekday(weekday));
    }
  };
  return (
    <div
      className="smallbox"
      style={{
        backgroundColor: selected ? "#118EEA" : flag ? "#1A2C50" : "",
        color: selected ? "white" : flag ? "white" : "black",
      }}
      onClick={handledatedata}
    >
      <p style={{ color: selected ? "white" : flag ? "white" : "#7f889e" }}>
        {date}
      </p>
      <h3>{weekday}</h3>
    </div>
  );
}
