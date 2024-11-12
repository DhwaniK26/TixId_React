import React, { useEffect, useState } from "react";
import "./style.css";
import MainArticle from "./components/mainArticle";
import { useLocation } from "react-router-dom";
import Navbar from "../Common/Navbar/navbar";
import SmallMovieBars2 from "../Common/MovieBar/smallMovieBar2";
import Footer from "../Common/Footer/footer";
import MainVideo from "./components/mainVideo";
import { data } from "../Data/articleData";

export default function Article() {
  const location = useLocation();
  const { flag } = location.state || {}; // From News/sorting

  const renderContent = (flag: string) => {
    switch (flag) {
      case "spider":
        return (
          <MainArticle
            title={data[0].title}
            date={data[0].date}
            imgshown={data[0].img}
            content={data[0].content}
          />
        );
      case "spi-video":
        return <MainVideo />;
      case "yow":
        return (
          <MainArticle
            title={data[1].title}
            date={data[1].date}
            imgshown={data[1].img}
            content={data[1].content}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="main">
        <Navbar />
        <div className="article-holder">
          {renderContent(flag)} {/* Directly rendering based on `flag` */}
        </div>
        <SmallMovieBars2 />
      </div>
      <Footer />
    </div>
  );
}
