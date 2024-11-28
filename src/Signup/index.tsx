import React, { useContext, useState, useEffect } from "react";
import "./style.css";
import LoginGrid from "../Common/Grid/loginGrid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setdata } from "../Redux/slice/authSlice";

export default function Signup() {
  const navigate = useNavigate();
  const [usernameState, setUsername] = useState<string>("");
  const [phonenumberState, setPhoneNumber] = useState<string>("");

  const dispatch = useDispatch();

  const submitdata = () => {
    const regex = /^[6-9]\d{9}$/;
    if (regex.test(phonenumberState)) {
      dispatch(
        setdata({ username: usernameState, phonenumber: phonenumberState })
      );
      navigate("/email");
    } else {
      alert("enter correct call no");
    }
  };

  return (
    <div className="bglogin" style={{ height: "inherit" }}>
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
