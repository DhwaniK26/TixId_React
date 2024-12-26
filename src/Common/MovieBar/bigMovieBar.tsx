import React, { useEffect, useState } from "react";
import "../style.css";
import BigMoviesList from "./bigMoviesList";
import Coming1 from "../../Assets/images/coming.png";
import Coming2 from "../../Assets/images/coming2.png";
import Coming3 from "../../Assets/images/coming3.png";
import MoviePosterLoading from "../../Assets/loading/moviePosterLoading";

export default function BigMovieBar() {
  const [showmovies, setshowmovies] = useState<any>(null);

  const comingsoonImages: { [key: string]: string } = {
    "The Matrix: Ressurrections": Coming1,
    "Resident Evil: Welcome to Raccoon City": Coming2,
    "Sword Art Online: Progressive - Aria of a Starless Night": Coming3,
  };

  const fetchedMovies = async () => {
    await fetch(`http://127.0.0.1:4000/testing/home/csoon`)
      .then((data) => {
        return data.json();
      })
      .then((resp) => {
        setshowmovies(resp.comingsoonlist);
        console.log(showmovies);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchedMovies();
  }, []);

  return (
    <div>
      <div className="threebig">
        {/* <BigMoviesList
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
        /> */}

        {showmovies && showmovies.length > 0 ? (
          showmovies.map((elem: any) => (
            <BigMoviesList
              movieimg={comingsoonImages[elem.movietitle]}
              moviename={elem.movietitle}
            />
          ))
        ) : (
          <MoviePosterLoading />
        )}
      </div>
    </div>
  );
}
