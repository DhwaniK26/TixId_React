import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { settrue } from "../../../Redux/slice/chooseSchSlice";

export default function FinalShow() {
  //----------showtimes-------------------------------
  const navigate = useNavigate(); // useNavigate hook for navigation
  const dispatch = useDispatch();

  const { screenName, selecttime, date, weekday, year, theatreName } =
    useSelector((state: any) => state.chooseSch);

  const goToAbout = () => {
    dispatch(settrue(true));
    navigate("/seats");
  };

  //--------------display-----------------
  const [say, setsay] = useState("none");

  useEffect(() => {
    console.log(screenName, selecttime.time, theatreName, date);
    if (!screenName || !selecttime.time || !theatreName || !date) {
      setsay("none");
      return;
    }
    setsay("block");
  }, [screenName, selecttime.time, date, theatreName]);

  return (
    <div className="final-card" style={{ display: say }}>
      <h2>{theatreName}</h2>

      <p className="p c-greydark">
        {weekday}, {date}, {year}{" "}
      </p>

      <div className="time">
        <h3>{screenName}</h3>
        <h3>{selecttime.time}</h3>
      </div>

      <p className="c-grey small-text">
        * Seat selection can be done after this
      </p>

      <button onClick={goToAbout} className="mybutton">
        BUY NOW
      </button>
    </div>
  );
}
