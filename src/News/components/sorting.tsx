import React, { useState, useRef, useEffect } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface SortType {
  nosort: boolean;
  setnosort: (value: boolean) => void;
}

export default function Sorting({ nosort, setnosort }: SortType) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setnosort(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      <div className="sorting-div" ref={dropdownRef}>
        {/* hello  <IoMdArrowDropup /> */}
        <div className="d-flex arrowdiv" onClick={() => setnosort(!nosort)}>
          <p>Sorting</p> <IoMdArrowDropup />
        </div>

        <div className="sort-lst">
          <div>
            <p className="d-flex">Spotlight </p>
          </div>
          <div>
            <p
              className="d-flex"
              onClick={() => {
                navigate("/article", { state: { flag: "spider" } });
              }}
            >
              News
            </p>
          </div>
          <div>
            <p
              className="d-flex"
              onClick={() => {
                navigate("/article", { state: { flag: "spi-video" } });
              }}
            >
              Videos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
