import React, { useState, useRef, useEffect } from "react";
import "./style.css";

interface TransferType {
  logo: string;
  bankname: string;
  tick: string;
  h: number | string;
  w: number | string;
  styles: {};
}

export default function Transfer({
  logo,
  bankname,
  tick,
  h,
  w,
  styles,
}: TransferType) {
  const [check, setcheck] = useState<boolean>(false);
  const trans = useRef<HTMLDivElement>(null);

  const checkbtn = () => {
    setcheck((prevCheck) => !prevCheck);
  };

  // Apply background based on check value
  // TODO
  useEffect(() => {
    check
      ? ((trans.current as HTMLDivElement).style.background = "#c9cbcf")
      : ((trans.current as HTMLDivElement).style.background = "white");
  }, [check]);

  return (
    <div className="full-trans" ref={trans} style={styles}>
      <div className="trans-div" onClick={checkbtn}>
        <img src={logo} height={h} width={w} />
        <div>{bankname}</div>
        <div>{check ? <img src={tick} /> : ""}</div>
      </div>
    </div>
  );
}
