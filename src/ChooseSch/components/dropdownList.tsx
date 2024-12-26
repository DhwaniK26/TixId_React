import React from "react";
import "../style.css";
import Arrowdown from "../../Assets/images/arrowdown.png";
import { useEffect, useRef } from "react";

interface DropType {
  setfalse: (value: boolean) => void;
  notshow: boolean;
  data: string[];
  title: string;
}

export default function DropdownList({
  setfalse,
  notshow,
  data,
  title,
}: DropType) {

  
  const dropdownRef = useRef <HTMLDivElement | null>(null); // Reference to the dropdown

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setfalse(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="small-dropList" ref={dropdownRef}>
      <div className="dropdown-inner" onClick={() => setfalse(!notshow)}>
        <p>{title}</p>
        <button className="arrowbtn">
          <img src={Arrowdown} height={18} width={18} />
        </button>
      </div>

      <ul>
        {data.map((elem: String) => (
          <li>{elem}</li>
        ))}
      </ul>
    </div>
  );
}
