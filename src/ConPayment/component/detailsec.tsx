import React from "react";
import "../style.css";

interface DetailType {
  detail_title: string;
  detailname: string;
}

export default function Detailsec({ detail_title, detailname }: DetailType) {
  return (
    <div className="detail-div">
      <p className="c-grey">{detail_title}</p>
      <h2>{detailname}</h2>
    </div>
  );
}
