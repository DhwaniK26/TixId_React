import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setmoney,
  setsrcreenname,
  settheatrename,
  settime,
} from "../../../Redux/slice/chooseSchSlice";
import { settime2 } from "../../../Redux/slice/seatsSlice";

interface SmType {
  time?: string;
  price?: number;
  screenname?: string;
  theatrename?: string;
  id?: string;
}

export default function SmTimeBox({
  time,
  price,
  screenname,
  theatrename,
  id,
}: SmType): JSX.Element {
  const dispatch = useDispatch();

  const handleTime = () => {
    dispatch(settime({ id, time }));
    dispatch(setsrcreenname(screenname));
    dispatch(setmoney(price));
    dispatch(settheatrename(theatrename)); // Dispatch theatrename here
  };

  //-----------------try-----------------

  const onetime = useSelector((state: any) => state.chooseSch.selecttime);

  const handlecolor = () => {
    dispatch(settime2(time));
    handleTime();
  };

  const isSelected = onetime.id === id;

  return (
    <div
      className="sm-timediv"
      onClick={handlecolor}
      style={{
        backgroundColor: isSelected ? "#118EEA" : "",
        color: isSelected ? "white" : "black",
      }}
    >
      {time}
    </div>
  );
}
