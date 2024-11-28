import React, { useContext, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import LoginGrid from "../Common/Grid/loginGrid";
import { AuthContext } from "../Context/loginContext";
import { CSSTransition } from "react-transition-group";

export default function Login() {
  const navigate = useNavigate();

  const [mytext, textfunc] = useState(null);
  const { login, isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    navigate("/");
  }

  const handleLogin = () => {
    login();
    navigate("/");
    console.log(mytext);
  };

  return (
    <div className="bglogin">
      <LoginGrid
        pagetitle={"Login to TIX ID"}
        phonelabel={"MOBILE PHONE NUMBER"}
        phoneholder={"+91 | Mobile Number"}
        passlabel={"PASSWORD"}
        passholder={"Enter Password"}
        buttonname={"Sign In Now"}
        buttonname2={"Register Now"}
        navto1={handleLogin}
        navto2={() => navigate("/signup")}
        back={() => navigate("/")}
        flag={true}
        statefunc={textfunc}
      />
    </div>
  );
}
