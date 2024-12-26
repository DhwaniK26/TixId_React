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
import { list1, list2, t1, t2, t3, t4, t5 } from "../Data/chooseSchdata";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Half from "./components/half";

export default function Schedule() {
  const [drop, setdrop] = useState(false);
  const [cityname, setcityname] = useState("Gujarat");
  const [searchbar, setsearch] = useState("");

  const handlecityname = (namegiven: string) => {
    setcityname(namegiven);
  };

  const navigate = useNavigate();

  const selected = useSelector((state: any) => state.home.selected);

  useEffect(() => {
    selected ? navigate("/schedule") : navigate("/");
  }, []);

  const date = useSelector((state: any) => state.chooseSch.date);

  const locationSubmit = () => {
    if (!date) {
      alert("Please select a date before proceeding.");
      return;
    }

    setdrop(!drop);
  };

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
            <hr className="time-hr"></hr>

            <div className="loc-div" onClick={locationSubmit}>
              <img src={Location} height={32} width={32} />
              <h2>{cityname}</h2>

              <button className="arrowbtn">
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
                <input
                  type="text"
                  onChange={(e) => setsearch(e.target.value)}
                />
              </div>
              <div className="dropdown-collect">
                <Dropdowns data={list1} title="Studio" />{" "}
                <Dropdowns data={list2} title="Sorting" />{" "}
              </div>
            </div>

            <Half search={searchbar} />
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
