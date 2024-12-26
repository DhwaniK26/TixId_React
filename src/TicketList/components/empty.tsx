import React from "react";
import "../style.css";
import Empty from "../../Assets/images/empty.png";

export default function Emptycomp() {
  return (
    <div className="nodata-main">
      <div>
        <img src={Empty} />
      </div>
    </div>
  );
}
