import React, { useState } from "react";
import "../style.css";
import Loc from "../../Assets/images/loc.png";
import Togglebtn from "./togglebtn";

interface MovType {
  photu: string;
  moviename: string;
  date: string;
  theatre: string;
  screen: string;
  done: boolean;
}

export default function MovTicketlst({
  photu,
  moviename,
  date,
  theatre,
  screen,
  done,
}: MovType) {
  return (
    <div className="movlst-outer">
      <div className="movlst-div">
        <div className="photo-div">
          <img src={photu} />
        </div>

        <div className="infoo-div">
          <div>
            <h2 className="w-500">{moviename}</h2>
            <p className="c1-grey">{date}</p>

            <div className="locsign-div2">
              <img src={Loc} height={32} width={32} />
              <p className="c1-grey">
                {theatre} <span>{screen}</span>
              </p>
            </div>
          </div>

          <div>
            <Togglebtn name={done ? "success" : "fail"} flag={done} />
          </div>
        </div>
      </div>
      <br></br>
      <hr className="linehr2"></hr>
    </div>
  );
}
