import React from "react";
import "../style.css";
import Arrowup from "../../Assets/images/arrowup.png";
import Clock from "../../Assets/images/clock.png";
import SmTimeBox from "../../ChooseSch/components/column1Movie/smTimeBox";

interface DropType {
  show: boolean;
  showset: (data: boolean) => void;
}

export default function Droptime({ show, showset }: DropType) {
  return (
    <div className="droptime-div">
      <div className="inner-dropdown">
        <img src={Clock} />
        <span>14:10</span>
        <img
          src={Arrowup}
          height={13}
          width={26}
          onClick={() => showset(!show)}
        />
      </div>

      <div className="inner-timedrop">
        <SmTimeBox time="2:00" />
        <SmTimeBox time="2:00" />
        <SmTimeBox time="2:00" />
        <SmTimeBox time="2:00" />
        <SmTimeBox time="2:00" />
        <SmTimeBox time="2:00" />
      </div>
    </div>
  );
}
