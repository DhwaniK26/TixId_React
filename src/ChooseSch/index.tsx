import React, { useEffect, useState } from "react";
import Navbar from "../Common/Navbar/navbar";
import Footer from "../Common/Footer/footer";
import "./style.css";
import TitleText from "../Common/TitlesNText/titleText";
import ScrollBoxes from "./components/scrollBoxes";
import Location from "../Assets/images/pointer.png";
import LocationScroll from "./components/locationScroll";
import Arrow from "../Assets/images/arrow.png";
import Dropdowns from "./components/dropdowns";
import SmallButtons from "../Common/Buttons/smallButtons";
import Theatre from "./components/column1Movie/theatre";
import TimeBoxes from "./components/column1Movie/timeBoxes";
import SpiderCard from "./components/column2/spiderCard";
import FinalShow from "./components/column2/finalShow";
import { list1, list2, list3, t1, t2, t3, t4, t5 } from "../Data/chooseSchdata";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Schedule() {
  const [drop, setdrop] = useState(false);
  const [cityname, setcityname] = useState("CITY");

  const handlecityname = (namegiven: string) => {
    setcityname(namegiven);
  };

  const navigate = useNavigate();

  const selected = useSelector((state: any) => state.home.selected);

  useEffect(() => {
    selected ? navigate("/schedule") : navigate("/");
  }, []);


  return (
    <div>
      <div className="main">
        <Navbar />
        <TitleText
          title="SCHEDULE"
          subtitle="Select the cinema schedule that you want to watch"
        />

        {/* GRID START */}
        <div className="grid-class">
          {/* FIRST GRID COL */}
          <div className="first-col1">
            {/* <ScrollBoxes handledatedata={handledatedata} /> */}
            <ScrollBoxes />
            <hr></hr>

            <div className="loc-div">
              <img src={Location} height={32} width={32} />
              <h2>{cityname}</h2>

              <button className="arrowbtn" onClick={() => setdrop(!drop)}>
                <img src={Arrow} height={7.5} width={15} />
              </button>

              <div className="inner-div">
                {drop ? (
                  <LocationScroll
                    notshow={drop}
                    setfalse={setdrop}
                    namepassed={handlecityname}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="inp-drop1">
              <div className="input-container-f">
                <input type="text" />
              </div>
              <div className="dropdown-collect">
                <Dropdowns data={list1} title="Studio" />{" "}
                <Dropdowns data={list2} title="Sorting" />{" "}
                <Dropdowns data={list3} title="Bioskop" />
              </div>
            </div>

            <div>
              <Theatre
                name={"GRAND INDONESIA CGV"}
                button={<SmallButtons text="CGV" color="red" size="13px" />}
              />

              <TimeBoxes
                screenname="REGULAR 2D"
                price={200}
                num={t1.length}
                timearray={t1}
                theatrename="GRAND INDONESIA CGV"
              />
              <TimeBoxes
                screenname="GOLD CLASS 2D"
                price={200}
                num={t2.length}
                timearray={t2}
                theatrename="GRAND INDONESIA CGV"
              />
              <TimeBoxes
                screenname="VELVET 2D"
                price={200}
                num={t3.length}
                timearray={t3}
                theatrename="GRAND INDONESIA CGV"
              />

              <Theatre
                name={"MANGGA DUA SQUARE CINÉPOLIS"}
                button={
                  <SmallButtons
                    text="cinepolis"
                    color="rgb(2, 2, 131)"
                    size="13px"
                  />
                }
              />

              <TimeBoxes
                screenname="2D"
                price={200}
                num={t4.length}
                timearray={t4}
                theatrename={"MANGGA DUA SQUARE CINÉPOLIS"}
              />

              <Theatre
                name={"PLAZA INDONESIA XXI"}
                button={
                  <SmallButtons
                    text="XXI"
                    color="linear-gradient(to right, rgb(239, 211, 5) , rgb(183, 156, 3))"
                    size="13px"
                  />
                }
              />

              <TimeBoxes
                screenname="2D"
                price={200}
                num={t5.length}
                timearray={t5}
                theatrename={"PLAZA INDONESIA XXI"}
              />
            </div>
          </div>

          {/* SECOND GRID COL */}
          <div className="sec-div">
            <SpiderCard />

            <FinalShow />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
