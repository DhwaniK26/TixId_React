import React from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import SmMovBarbtn from "../Buttons/smMovBarbtn";

interface SmMovType {
  movieposter: string;
  title: string;
  date: String;
  mycontent: String;
}

export default function SMovBrMovies({
  movieposter,
  title,
  date,
  mycontent,
}: SmMovType) {
  const navigate = useNavigate();

  return (
    <div className="threeBoxdiv">
      <img src={movieposter} width="100%" height="237px" />
      <button
        className="sm-mov-btn"
        style={{ padding: "10px 5px", fontSize: "15px" }}
        onClick={() => navigate("/article", { state: { flag: mycontent } })}
      >
        Spotlight
      </button>
      {/* <SmMovBarbtn /> */}
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
}
