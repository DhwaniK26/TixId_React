import React, { useState } from "react";
import "../style.css";
import { useSelector } from "react-redux";

interface SeatType {
  id: any;
  number: string;
  handlechair: (data: string) => void;
  bgcolor: string;
  selected: boolean;
  unavailarr: any
}

export default function SeatBoxes({
  number,
  handlechair,
  id,
  unavailarr
}: SeatType) {
 

  
  // const [bluecolor, setbluecolor] = useState<string | any>();
  // const [fontcolor, setfontcolor] = useState<string | any>();
  // const [flag, setflag] = useState(true);

  const handlecolor = (elem: React.MouseEvent<HTMLDivElement>) => {
    handlechair(number);
    console.log("seat id:", id);
  };

  const selectedSeats = useSelector((state: any) => state.seats.seats);
  const yes = selectedSeats.includes(number);

  //-------------------------------------------
  const isUnavailable = unavailarr?.some((seat : any) => seat.seatid === number);

  const backgroundColor = isUnavailable? "#1A2C50" : yes ? "#118EEA" : "white"; 

  const textColor = isUnavailable ? "white" : yes ? "white" : "black";

  const pointereve = isUnavailable ? "none" : yes ? "auto" : "auto"
  return (
    <div
      className="small-seatdiv"
      onClick={handlecolor}
      style={{
        background: backgroundColor,
        color: textColor,
        pointerEvents: pointereve
      }}
    >
      {number + " "}
    </div>
  );
}
