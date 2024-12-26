import React from "react";
import "../style.css";
import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import Smallcir from "./smallcir";
import Download from "../../Assets/images/download.png";

interface Blueyell {
  moviename: string;
  theatrename: string;
  date: string;
  time: string;
  screenname: string;
  seats: string[];
}

export default function BlueYell() { //   moviename,
//   theatrename,
//   date,
//   time,
//   screenname,
//   seats,
  const [circles, setCircles] = useState<JSX.Element[]>([]);
  const len = useRef<HTMLDivElement>(null);
  const moviename = useSelector((state: any) => state.home.selectedMovie);
  const { date, theatreName, screenName, time, year } = useSelector(
    (state: any) => state.chooseSch
  );
  const seats = useSelector((state: any) => state.seats.seats);

  //   const year = useSelector((state: any) => state.chooseSch.year);

  const updateCircles = () => {
    if (len.current) {
      const length = len.current.clientWidth;
      const numCircles = Math.floor(length / 42); // Adjust based on your circle size
      const arr = [];

      for (let i = 0; i < numCircles; i++) {
        arr.push(<Smallcir key={i} />); // Add unique key
      }

      setCircles(arr);
      console.log("Number of circles:", arr.length);
    }
  };

  useEffect(() => {
    updateCircles(); // Initial update

    window.addEventListener("resize", updateCircles); // Update on resize
    return () => window.removeEventListener("resize", updateCircles); // Clean up on unmount
  }, []);

  return (
    <div>
      <div className="inner-blue ">
        <h2 className="w-500">{moviename}</h2>

        <div className="blue-grid">
          <div className="blue-grid-first">
            <p className="c-grey">Location</p>
            <p>{theatreName}</p>
            <br></br>

            <div className="blue-grid-inner">
              <div>
                <p className="c-grey">Date</p>
                <p>
                  {date} , {year}
                </p>
              </div>

              <div>
                <p className="c-grey">Time</p>
                <p>{time}</p>
              </div>
            </div>
          </div>

          <div className="blue-grid-sec">
            <div>
              <p className="c-grey">Class</p>
              <p>{screenName}</p>
              <br></br>
            </div>

            <div>
              <p className="c-grey">Studio</p>
              <p>Studio 1</p>
            </div>
          </div>
        </div>
      </div>

      {/* YELLOW SEC */}
      <div>
        <div className="inner-yellow" ref={len}>
          <div className="inner-yellow-firstdiv">
            <p className="inner-yellow-first">
              <p>Booking Code</p>
              <p>{Math.floor(Math.random() * 999)}</p>
            </p>
            <p className="inner-yellow-first">
              <p>Password Key</p>
              <p>123343525</p>
            </p>
            <p className="inner-yellow-first">
              <p>Seats</p>
              <p>{`${seats}   `}</p>
            </p>
          </div>

          <div className="inner-yellow-sec">
            {/* <img src={Download} onClick={mylastfunc} /> */}
            <img src={Download} />
          </div>

          <div className="cir-div">{circles}</div>
        </div>
      </div>
    </div>
  );
}
