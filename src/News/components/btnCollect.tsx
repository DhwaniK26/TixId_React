import React from "react";
import Circlebtn from "../../TicketList/components/circlebtn";
import "../style.css";

export default function BtnCollect() {
  return (
    <div>
      <div className="btn-collect d-flex ">
        <Circlebtn
          text="Spiderman"
          bor="1px solid #8F98AA"
          fontcolor="#8F98AA"
        />
        <Circlebtn
          text="Peter Parker"
          bor="1px solid #8F98AA"
          fontcolor="#8F98AA"
        />
        <Circlebtn
          text="Yowis Ben"
          bor="1px solid #8F98AA"
          fontcolor="#8F98AA"
        />
        <Circlebtn
          text="Ghostbusters"
          bor="1px solid #8F98AA"
          fontcolor="#8F98AA"
        />
        <Circlebtn
          text="Film Indonesia"
          bor="1px solid #8F98AA"
          fontcolor="#8F98AA"
        />
        <Circlebtn text="Aksi" bor="1px solid #8F98AA" fontcolor="#8F98AA" />
      </div>
    </div>
  );
}
