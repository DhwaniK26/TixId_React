import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "../style.css";
import SmallBoxes from "./smallBoxes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { monthNames, weeknames } from "../../Data/chooseSchdata";

export default function ScrollBoxes() {
  //GETTING DATE DATA

  //====================================================================

  const mydates = [5, 6, 7, 8, 9];
  const collectdate = [];
  const today = new Date();
  const week = [];

  for (i = 0; i < mydates.length; i++) {
    const add = mydates[i];
    collectdate.push(`${add} DEC`);
    const day = (today.getDay() + i) % 7;
    week.push(weeknames[day]);
  }

  const datedata = [];

  for (var i = 0; i <= collectdate.length - 1; i++) {
    datedata.push({ date: collectdate[i], weekday: week[i], flag: false });
  }

  //--------------------------------------------------------------------------

  // const todaydate = today.getDate();
  // const todayweek = weeknames[today.getDay()];
  // const todaymonth = monthNames[today.getMonth()];
  // const all = todaydate + " " + todaymonth;

  // const result = datedata.map((elem) => {
  //   if (elem.date == all && elem.weekday == todayweek) {
  //     elem.flag = true;
  //   }
  //   return elem;
  //});

  //-----------------------------------------------------------------------

  const shownext = () => {
    const container = document.querySelector(".datebox");
    if (container) {
      container.scrollLeft += 100; // Adjust scroll amount as needed
    }
  };

  const showprev = () => {
    const container = document.querySelector(".datebox");
    if (container) {
      container.scrollLeft -= 100; // Adjust scroll amount as needed
    }
  };

  //--------------------SMALLBOX------------------

  const [selectedBox, setSelectedBox] = useState<string | null>(null);

  const handleBoxSelect = (date: string) => {
    setSelectedBox(date); // Update selected box on click
  };

  //------------passing---------------

  return (
    <div className="extra">
      <button onClick={showprev} className="sidebuttons">
        ❮
      </button>
      <div className="datebox">
        {datedata.map((elem) => (
          <SmallBoxes
            date={elem.date}
            weekday={elem.weekday}
            flag={elem.flag}
            selected={selectedBox === elem.date}
            onSelect={() => handleBoxSelect(elem.date)}
          />
        ))}
      </div>
      <button onClick={shownext} className="sidebuttons">
        ❯
      </button>
    </div>
  );
}
