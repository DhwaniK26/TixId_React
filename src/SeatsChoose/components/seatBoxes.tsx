import React, { useState } from "react";
import "../style.css";
import { useSelector, UseSelector } from "react-redux";

interface SeatType {
  number: string;
  handlechair: (data: string) => void;
  bgcolor: string;
  selected: boolean;
}

export default function SeatBoxes({
  number,
  handlechair,
  bgcolor,
  selected,
}: SeatType) {
  // const [bluecolor, setbluecolor] = useState<string | any>();
  // const [fontcolor, setfontcolor] = useState<string | any>();
  // const [flag, setflag] = useState(true);

  const handlecolor = (elem: React.MouseEvent<HTMLDivElement>) => {
    handlechair(number);
  };

  const selectedSeats = useSelector((state: any) => state.seats.seats);
  const yes = selectedSeats.includes(number);

  return (
    <div
      className="small-seatdiv"
      onClick={handlecolor}
      style={{
        background: yes ? " #118EEA" : "white",
        color: yes ? "white" : "black",
      }}
    >
      {number + " "}
    </div>
  );
}
