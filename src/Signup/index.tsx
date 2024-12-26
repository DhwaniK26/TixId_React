import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import LoginGrid from "../Common/Grid/loginGrid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setdata } from "../Redux/slice/authSlice";
import { AuthContext } from "../Context/loginContext";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function Signup() {
  const navigate = useNavigate();
  const [usernameState, setUsername] = useState<string>("");
  const [phonenumberState, setPhoneNumber] = useState<string>("");

  const dispatch = useDispatch();

  const submitdata = () => {
    const regex = /^[6-9]\d{9}$/;
    if (!(usernameState.length >= 2)) {
      toast.error("Username must be more than 1 word", {
        className: "toast-error-red", // Custom class for error background
        progressClassName: "toast-progress-white", // Custom class for progress bar
      });
      return;
    }
    if (!(phonenumberState == " " || regex.test(phonenumberState))) {
      toast.error("Enter a valid phone number", {
        className: "toast-error-red", // Custom class for error background
        progressClassName: "toast-progress-white", // Custom class for progress bar
      });
      return;
    } else {
      navigate("/email");
      dispatch(
        setdata({ username: usernameState, phonenumber: phonenumberState })
      );
    }
  };

  return (
    <div className="bglogin33" style={{ height: "100vh" }}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <LoginGrid
        pagetitle={"TIX ID Register"}
        phonelabel={"FULL NAME"}
        phoneholder={"Enter Input"}
        passlabel={"MOBILE PHONE NUMBER"}
        passholder={"+91 | Mobile Number"}
        buttonname={"Register Now"}
        navto1={submitdata}
        show={true}
        back={() => navigate("/login")}
        flag={false}
        statefunc={setUsername}
        statefunc2={setPhoneNumber}
      />
    </div>
  );
}
