import React from "react";
import "../style.css";
import SMovBrMovies from "./sMovBrMovies";
import Poster1 from "../../Assets/images/poster1.png";
import Poster2 from "../../Assets/images/poster2.png";
import Poster3 from "../../Assets/images/poster3.png";

export default function SmallMovieBars() {
  return (
    <div className="three">
      <SMovBrMovies
        movieposter={Poster1}
        title="Spider-Man: No Way Home Releases New Trailer."
        date="08 Nov 2021 | TIX ID"
        mycontent="n1"
      />

      <SMovBrMovies
        movieposter={Poster2}
        title="Facts About the Movie Yowis Ben Finale That You Need to Know Before Watching!"
        date="09 Nov 2021 | TIX ID"
        mycontent="n2"
      />

      <SMovBrMovies
        movieposter={Poster3}
        title="Ghostbusters: Afterlife Arrives Featuring New Ghost Variations"
        date="21 Nov 2021 | TIX ID"
        mycontent={"n3"}
      />
    </div>
  );
}
