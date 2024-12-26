import React, { useEffect, useState } from "react";
import "./style.css";
import MainArticle from "./components/mainArticle";
import { useLocation } from "react-router-dom";
import Navbar from "../Common/Navbar/navbar";
import SmallMovieBars from "../Common/MovieBar/smallMovieBars";
import Footer from "../Common/Footer/footer";
import MainVideo from "./components/mainVideo";
import { data } from "../Data/articleData";

export default function Article() {
  const location = useLocation();
  const { flag } = location.state || {}; // From News/sorting

  // const renderContent = (flag: string) => {
  //   switch (flag) {
  //     case "n1":
  //       return (
  //         <MainArticle
  //           title={data[0].title}
  //           date={data[0].date}
  //           imgshown={data[0].img}
  //           content={data[0].content}
  //         />
  //       );
  //     case "spi-video":
  //       return <MainVideo />;
  //     case "n2":
  //       return (
  //         <MainArticle
  //           title={data[1].title}
  //           date={data[1].date}
  //           imgshown={data[1].img}
  //           content={data[1].content}
  //         />
  //       );
  //     default:
  //       return null;
  //   }
  // };

  const [view, setview] = useState<any>();

  const loginData = {
    usernewsid: flag,
  };

  const formData = new URLSearchParams(loginData);

  const namefunc = async () => {
    await fetch(`http://127.0.0.1:4000/testing/newsdesc`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // Set the content type to JSON
      },
      body: formData, // Replace this with your data
    })
      .then((resp) => {
        return resp.json();
      })
      .then((namedata) => {
        console.log("finlllyyyyy", namedata);

        setview(
          <MainArticle
            title={namedata.newsdescript[0].newsid.title}
            date={namedata.newsdescript[0].newsid.newsdata}
            imgshown={namedata.newsdescript[0].newsid.poster}
            content={namedata.newsdescript[0].description}
          />
        );
      })

      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    namefunc();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [flag]);

  return (
    <div>
      <div className="main">
        <Navbar />
        <div className="article-holder">{view}</div>
        <SmallMovieBars />
      </div>
      <Footer />
    </div>
  );
}
