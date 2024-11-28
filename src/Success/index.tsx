import React, { useEffect } from "react";
import Navbar from "../Common/Navbar/navbar";
import "./style.css";
import Reel from "../Assets/images/reel.png";
import Footer from "../Common/Footer/footer";
import { useNavigate } from "react-router-dom";
import { useSelector, UseSelector } from "react-redux";

export default function Success() {
  const navigate = useNavigate();

  const selected = useSelector((state: any) => state.rest.paymentSelect);

  useEffect(() => {
    selected ? navigate("/success") : navigate("/payment");
  }, []);
  return (
    <div>
      <div className="main">
        <Navbar />

        <div className="big-div">
          <div className="inner-bigdiv">
            <h1>Payment successfull !</h1>

            <img src={Reel} />

            <h4 className="c-grey">
              Transaction details have been sent to your email, you can also
              check other ticket details in my tickets either on the website or
              your smartphone.
            </h4>

            <button onClick={() => navigate("/ticketList")}>My Ticket</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
