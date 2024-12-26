import React, { useState, useEffect, useRef } from "react";
import "../style.css";
import Arrow from "../../Assets/images/arrow.png";
import { states } from "../../Data/chooseSchdata";
import { useDispatch } from "react-redux";
import { setlocation } from "../../Redux/slice/chooseSchSlice";

interface LocationType {
  setfalse: (value: boolean) => void;
  notshow: boolean;
  namepassed: (data: string) => void;
}

export default function LocationScroll({
  setfalse,
  notshow,
  namepassed,
}: LocationType) {
  //------------------------------------------------------

  const dropdownRef = useRef<HTMLDivElement | null>(null); // Reference to the dropdown
  const dispatch = useDispatch();

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

  //------------------------------------------------------------------
  const [city, setCity] = useState(states);

  const [cityselected, selectedfunc] = useState<any | null>(null);

  {
    /* NAME PASSING TO PARENT & SETTING SELECTED NAME */
  }
  const handleselected = (event: any) => {
    var printcity = event.target.textContent;
    selectedfunc(printcity);
    namepassed(printcity);

    dispatch(setlocation(printcity));
  };

  {
    /* SEARCH CITY INPUT */
  }
  const search = (event: any) => {
    const value = event.target.value;
    if (value) {
      setCity(
        states.filter((e: any) => e.toLowerCase().includes(value.toLowerCase()))
      );
    } else {
      setCity(states);
    }
  };
  return (
    <div>
      <div className="dropdown" ref={dropdownRef}>
        <div className="dropdown-inner" onClick={() => setfalse(!notshow)}>
          <h2>{cityselected ?? "SELECT"} </h2>
          <button className="arrowbtn">
            <img src={Arrow} height={7.5} width={15} />
          </button>
        </div>

        <input onChange={search} type="text" placeholder="Search your City" />

        <div className="cities">
          <ul>
            {city.map((elem) => {
              return <li onClick={handleselected}>{elem}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
