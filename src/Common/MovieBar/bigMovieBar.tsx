import React from "react";
import "../style.css";
import BigMoviesList from "./bigMoviesList";
import Coming1 from "../../Assets/images/coming.png";
import Coming2 from "../../Assets/images/coming2.png";
import Coming3 from "../../Assets/images/coming3.png";

export default function BigMovieBar() {
  return (
    <div>
      <div className="threebig">
        <BigMoviesList
          movieimg={Coming1}
          moviename="The Matrix: Ressurrections"
        />

        <BigMoviesList
          movieimg={Coming2}
          moviename="Resident Evil: Welcome to Raccoon City"
        />

        <BigMoviesList
          movieimg={Coming3}
          moviename="Sword Art Online: Progressive - Aria of a Starless Night"
        />
      </div>
    </div>
  );
}
