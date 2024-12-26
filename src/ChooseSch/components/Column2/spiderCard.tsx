import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";

export default function SpiderCard() {
  const showmovie = useSelector((state: any) => state.home.selectedMovie);
  const [details, setdetails] = useState<any>();

  const moviedetails = async () => {
    await fetch(`http://127.0.0.1:4000/testing/home`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const filtereddata = data.movielist.filter((elem: any) => {
          return elem.moviename === showmovie.name;
        });

        return filtereddata;
      })
      .then((filterddata) => {
        setdetails(filterddata);
        console.log("filteredd:", details);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    moviedetails();
  }, []);

  return (
    <div className="spider-main">
      <img src={showmovie.poster} />

      <h4>{showmovie.name}</h4>

      <div className="lst">
        <div>
          <p>Genre</p>
          <p>Duration</p>
          <p>Director</p>
          <p>Age Rating</p>
        </div>
        <div>
          {/* <p>{details[0].genre}</p>
          <p>{details[0].duration}</p>
          <p>{details[0].director}</p>
          <p>{details[0].agerating}</p> */}

          {details && details.length > 0 ? (
            <div>
              {details.map((elem: any) => (
                <div key={elem.id}>
                  {" "}
                  {/* Add a unique key for each item */}
                  <p>{elem.genre}</p>
                  <p>{elem.duration}</p>
                  <p>{elem.director}</p>
                  <p>{elem.agerating}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>hello</p>
          )}
        </div>
      </div>
    </div>
  );
}
