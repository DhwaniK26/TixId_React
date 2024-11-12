import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "../style.css";
import SmallBoxes from "./smallBoxes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { monthNames, weeknames } from "../../Data/chooseSchdata";

export default function ScrollBoxes() {
  //GETTING DATE DATA

  const today = new Date();

  const collectdate = [];

  const week = [];

  for (i = 0; i <= 8; i++) {
    const add = today.getDate() + i;
    const monthnow = today.getMonth();
    collectdate.push(`${add} ${monthNames[monthnow]}`);

    const day = (today.getDay() + i) % 7;
    week.push(weeknames[day]);
  }

  const datedata = [];

  for (var i = 0; i <= collectdate.length - 1; i++) {
    datedata.push({ date: collectdate[i], weekday: week[i], flag: false });
  }

  //--------------------------------------------------------------------------

  const todaydate = today.getDate();
  const todayweek = weeknames[today.getDay()];
  const todaymonth = monthNames[today.getMonth()];
  const all = todaydate + " " + todaymonth;

  const result = datedata.map((elem) => {
    if (elem.date == all && elem.weekday == todayweek) {
      elem.flag = true;
    }
    return elem;
  });

  //-----------------------------------------------------------------------

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [show, showfunc] = useState(result.slice(start, end));

  const shownext = () => {
    if (end < result.length) {
      //
      setStart((prev) => prev + 1);
      setEnd((prev) => prev + 1);
      showfunc(result.slice(start + 1, end + 1));
    }
  };

  const showprev = () => {
    if (start > 0) {
      setStart((prev) => prev - 1);
      setEnd((prev) => prev - 1);
      showfunc(result.slice(start - 1, end - 1));
    }
  };

  //--------------------SMALLBOX------------------

  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  const handleBoxSelect = (date: string) => {
    setSelectedBox(date); // Update selected box on click
  };

  return (
    <div className="datebox">
      <button onClick={showprev}> ❮ </button>
      {show.map((elem) => (
        <SmallBoxes
          date={elem.date}
          weekday={elem.weekday}
          flag={elem.flag}
          selected={selectedBox === elem.date}
          onSelect={() => handleBoxSelect(elem.date)}
        />
      ))}
      <button onClick={shownext}> ❯ </button>
    </div>
  );
}
