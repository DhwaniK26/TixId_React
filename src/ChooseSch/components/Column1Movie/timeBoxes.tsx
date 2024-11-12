import React, { useState, useEffect } from "react";
import "./style.css";
import SmTimeBox from "./smTimeBox";

interface TimeType {
  screenname: string;
  price: number;
  num: number;
  timearray: string[];
  theatrename: string; // Add this prop
}

export default function TimeBoxes({
  screenname,
  price,
  num,
  timearray,
  theatrename,
}: TimeType) {
  return (
    <div className="show-main">
      <div className="shows">
        <h3 className="c-grey">{screenname}</h3>
        <p className="c-grey">Rs. {price}</p>
      </div>
      <div className="time-division">
        {timearray.slice(0, num).map((time, index) => (
          <SmTimeBox
            key={index}
            id={`${theatrename}-${screenname}-${time}`}
            time={time}
            price={price}
            screenname={screenname}
            theatrename={theatrename}
          />
        ))}
      </div>
    </div>
  );
}
