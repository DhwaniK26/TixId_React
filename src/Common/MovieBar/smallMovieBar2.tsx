import React from "react";
import "../style.css";
import SMovBrMovies from "./sMovBrMovies";
import Post1 from "../../Assets/images/poster3.png";
import Post2 from "../../Assets/images/gucciposter.png";
import Post3 from "../../Assets/images/lastposter.png";
import MoviePosterLoading from "../../Assets/loading/moviePosterLoading";

interface Bar2 {
  arr?: string[];
}

export default function SmallMovieBars2({ arr }: Bar2) {
  return (
    <div className="three">
      {arr ? (
        arr?.map((elem: any) => {
          return (
            <SMovBrMovies
              movieposter={elem.poster}
              title={elem.title}
              date={elem.newsdate + " | TIX ID"}
              mycontent={elem.newsid}
            />
          );
        })
      ) : (
        <>
          <MoviePosterLoading />
        </>
      )}
    </div>
  );
}
