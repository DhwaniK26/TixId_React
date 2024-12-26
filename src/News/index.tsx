import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import Navbar from "../Common/Navbar/navbar";
import TitleText from "../Common/TitlesNText/titleText";
import Arrdown from "../Assets/images/arrowdown.png";
import Sorting from "./components/sorting";
import Circlebtn from "../TicketList/components/circlebtn";
import MovieGrid from "./components/movieGrid";
import Spider1 from "../Assets/images/spider1.png";
import Yow from "../Assets/images/yowis1.png";
import SmallMovieBars2 from "../Common/MovieBar/smallMovieBar2";
import Footer from "../Common/Footer/footer";
import BtnCollect from "./components/btnCollect";

export default function News() {
  const [showsort, setshowsort] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [propValue, setPropValue] = useState<any>("default");

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  const [newsdata, setnewsdata] = useState<any>(null);
  const [sendarr, setsendarr] = useState<any>(null);

  //------------------------------------------------------

  const displayMovies = async () => {
    await fetch(`http://127.0.0.1:4000/testing/news`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("data of news that is not working", data);
        if (data && data.allnews) {
          const firstItem = data.allnews.slice(0, 2); // First two items
          const remainingItems = data.allnews.slice(2); // The rest

          setnewsdata(firstItem);
          setsendarr(remainingItems);
          console.log("news data:", newsdata);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    displayMovies();
    window.addEventListener("resize", handleResize);

    // Set prop value based on screen size
    if (screenSize <= 824) {
      setPropValue("");
    } else {
      setPropValue("row-reverse");
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenSize]);

  return (
    <div>
      <div className="main">
        <Navbar />

        <TitleText
          title={"TIX ID News"}
          subtitle={"The latest news about the world of cinema for you!"}
        />

        <div className="mysearch-div">
          <div className="input-container">
            <input type="text" />
          </div>

          <div className="d-flex sort-drop">
            <p onClick={() => setshowsort(!showsort)}>Sorting</p>
            <span>
              <img src={Arrdown} height={20} width={20} />
            </span>
            {showsort ? (
              <Sorting nosort={showsort} setnosort={setshowsort} />
            ) : (
              ""
            )}
          </div>
        </div>

        <BtnCollect />

        {newsdata?.map((elem: any, index: number) => {
          const isFirst = index === 0;
          const isLast = index === newsdata.length - 1;

          return (
            <MovieGrid
              key={index}
              myimg={elem.poster}
              movname={elem.title}
              movinfo={
                "Spider-Man: No Way Home is a highly anticipated film by many. This film is a continuation of Peter Parker's story in ..."
              }
              movdate={elem.newsdate + " | TIX ID"}
              justc={isFirst ? "flex-start" : undefined}
              colrev={isLast ? propValue : undefined}
              mycontent={elem.newsid}
            />
          );
        })}

        <div className="mov-bars">
          <SmallMovieBars2 arr={sendarr} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
