import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Navbar from "../Common/Navbar/navbar";
import TitleText from "../Common/TitlesNText/titleText";
import Clock from "../Assets/images/clock.png";
import Arrowup from "../Assets/images/arrowup.png";
import Droptime from "./components/droptime";
import ColorBoxes from "./components/colorBoxes";
import SeatCol from "./components/seatCol";
import Pricebox from "./components/pricebox";
import Footer from "../Common/Footer/footer";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/loginContext";
import { useSelector, useDispatch } from "react-redux";
import { setseats, settotalprice } from "../Redux/slice/seatsSlice";

export default function Seats() {
  const [showdrop, setshowdrop] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate(); // useNavigate hook for navigation

  const { isAuthenticated } = useContext(AuthContext);

  const seats = useSelector((state: any) => state.seats.seats);

  const goToAbout = () => {
    if (seats.length <= 0) {
      alert("Choose seats");
    } else {
      isAuthenticated ? navigate("/payment") : navigate("/login");
    }
  };

  //getting seat number--------------------------------------------------------

  const [chair, setchair] = useState<string | any>([]); //chairs array

  const handlechair = (elem: string) => {
    let updatedChair;

    if (chair.includes(elem)) {
      // Remove elem from chair
      updatedChair = chair.filter((item: any) => item !== elem);
    } else {
      // Add elem to chair-------only 5
      updatedChair = [...chair, elem];
      if (chair.length > 4) {
        updatedChair = chair.slice(-4);
      }
    }

    setchair(updatedChair);
    dispatch(setseats(updatedChair));
  };

  //total price of seats--------------------------------------------------------

  const money = useSelector((state: any) => state.chooseSch.money);

  const [totalamt, settotal] = useState<number>(0);

  useEffect(() => {
    var totalprice = 0;
    for (var i = 0; i <= chair.length; i++) {
      var totalprice = money * i;
    }
    settotal(totalprice);
    dispatch(settotalprice(totalamt));
  }, [chair]);

  return (
    <div>
      <div className="main">
        <Navbar />

        <TitleText
          title="CHOOSE A SEAT"
          subtitle="Choose the seat you will occupy during the film screening."
        />

        <div className="seats-div">
          <div className="time-div">
            <div className="clock-div">
              <img src={Clock} />
              <span>14:10</span>
              <img
                src={Arrowup}
                className="arrowdown"
                onClick={() => setshowdrop(!showdrop)}
              />

              <div className="inner-clock">
                {showdrop ? (
                  <Droptime show={showdrop} showset={setshowdrop} />
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="color-div">
              <ColorBoxes bgcolor="#1A2C50" border="none" />
              <span>Theresa</span>
              <ColorBoxes bgcolor="white" border="1px solid grey" />
              <span>Empty Chair</span>
              <ColorBoxes bgcolor="#118EEA" border="none" />
              <span>Chosen</span>
            </div>
          </div>

          {/* SEATS SELECTION */}

          <div className="all-seats-grid">
            <SeatCol start={1} end={10} handlechair={handlechair} />
            <SeatCol start={11} end={20} handlechair={handlechair} />
          </div>
        </div>
      </div>

      {/* BLUE STRAP */}

      <div className="blue-strap">
        <p>Cinema Screen Here</p>
      </div>

      {/* PRICE SECTION */}
      <div className="main">
        <div className="pricedisplay-div">
          <Pricebox title="Total" content={totalamt} size="1.5rem" />
          <Pricebox
            title="Kursi"
            content={chair.map((ele: string) => {
              return ele + " ";
            })}
            size="1.5rem"
          />

          <div className="inner-pricedisplay">
            <button onClick={() => navigate("/schedule")} className="cc-grey">
              Return
            </button>
            <button onClick={goToAbout}>CONFIRM</button>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
