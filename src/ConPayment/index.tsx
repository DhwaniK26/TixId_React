import React, { useEffect, useState } from "react";
import "./style.css";
import Navbar from "../Common/Navbar/navbar";
import TitleText from "../Common/TitlesNText/titleText";
import Detailsec from "./component/detailsec";
import Return from "../Assets/images/return.png";
import ReptText from "../Common/TitlesNText/reptText";
import Dana from "../Assets/images/dana.png";
import Footer from "../Common/Footer/footer";
import Modal from "./Modal/modal";
import PayModal from "./Modal/payModal";
import ModalReturn from "./Modal/returnModal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setpaytrue } from "../Redux/slice/restStateSlice";

export default function Payment() {
  const [paymodal, setpaymodal] = useState(false);
  const [returnmodal, setreturnmodal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moviename = useSelector((state: any) => state.home.selectedMovie);
  const { date, weekday, screenName, time, money, year } = useSelector(
    (state: any) => state.chooseSch
  );
  const seats = useSelector((state: any) => state.seats.seats);
  const selected = useSelector((state: any) => state.seats.selected);

  const len = seats.length;

  //---------------data------------------------------
  const serData = { service: 3, promo: 70 };

  //--------------total payment-----------------
  const totalpay = money * len + serData.service * len - serData.promo;

  useEffect(() => {
    selected ? navigate("/payment") : navigate("/seats");
  }, []);

  return (
    <div>
      <div className="main">
        <Navbar />

        <TitleText
          title="PAYMENT CONFIRMATION"
          subtitle="Confirm payment for the seat you ordered"
        />
        {/* GRID */}
        <div className="payment-grid">
          {/* FIRST COL */}
          <div className="first-col">
            <h2 className="heading">Schedule Details</h2>

            <Detailsec detail_title="Movie title" detailname={moviename.name} />
            <hr></hr>

            <Detailsec
              detail_title="Date"
              detailname={`${weekday} ${date}, ${year}`}
            />
            <hr></hr>

            <div className="inner-firstcol">
              <Detailsec detail_title="Class" detailname={screenName} />
              <Detailsec detail_title="Time" detailname={time} />
            </div>

            <hr className="hr2"></hr>

            <Detailsec detail_title="Tickets" detailname={seats + "  "} />
            <hr></hr>

            <div
              className="btn-div"
              onClick={() => setreturnmodal(!returnmodal)}
            >
              <img src={Return} />
              <p className="c-grey">Return</p>
              {returnmodal ? (
                <Modal
                  content={
                    <ModalReturn show={returnmodal} setshow={setreturnmodal} />
                  }
                />
              ) : (
                " "
              )}
            </div>
          </div>

          {/* SECOND COL */}

          <div className="rept-div">
            <h2>Order Summary</h2>

            <div className="inner-rept-div">
              <h4>Transaction Details</h4>
              <ReptText
                seattype="REGULAR"
                price={`Rs. ${money}`}
                X={`X${len}`}
              />
              <ReptText
                seattype="SERVICE FEE"
                price={`Rs. ${serData.service}`}
                X={`X${len}`}
              />

              <hr className="hr3"></hr>

              <h4>Promo & Voucher</h4>
              <ReptText
                seattype="PROMO TIX ID"
                price={`- Rs. ${serData.promo}`}
              />

              <hr className="hr3"></hr>

              <ReptText
                fontWeight={600}
                seattype="Total Payment"
                price={`- Rs. ${totalpay}`}
              />

              <hr></hr>

              <div className="reptText">
                <h3>Payment Methods</h3>
                <h5
                  onClick={() => setpaymodal(!paymodal)}
                  style={{ cursor: "pointer" }}
                >
                  See All
                </h5>
                {paymodal ? (
                  <Modal
                    content={
                      <PayModal close={paymodal} setclose={setpaymodal} />
                    }
                  />
                ) : (
                  ""
                )}
              </div>

              <div className="mode-select">
                <img src={Dana} height={20} width={55} />
                <span>DANA</span>
              </div>

              <p className="warning">*Ticket purchases cannot be cancelled.</p>

              <button
                className="sub-btn"
                onClick={() => {
                  navigate("/success");
                  dispatch(setpaytrue(true));
                }}
              >
                BUY TICKETS
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ height: "4rem" }}></div>
      <Footer />
    </div>
  );
}
