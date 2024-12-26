import React from "react";
import "../style.css";
import Nodata from "../../Assets/images/nodata2.png";

export default function noData() {
  return (
    <div className="nodata-main">
      <div>
        <img src={Nodata} />
      </div>
    </div>
  );
}
