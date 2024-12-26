import React, { useContext, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import LoginGrid from "../Common/Grid/loginGrid";
import { AuthContext } from "../Context/loginContext";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch} from "react-redux";

import "react-toastify/ReactToastify.css";
import { setdata, setuserlogo } from "../Redux/slice/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [mytext, textfunc] = useState<string>("");
  const { login, isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    navigate("/");
  }

  const loginData = {
    phonenumber: mytext,
  };

  const formData = new URLSearchParams(loginData);

  const usercheck = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:4000/testing/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      const checkeddata = await response.json();
      console.log("Full login response:", checkeddata); // Log the entire response

      if (checkeddata.status === 1) {
        // Use strict equality
        login();
        dispatch(setdata({ phonenumber: mytext }));
        dispatch(setuserlogo(checkeddata.username[0].username));

        // Check token before storing
        if (checkeddata.token) {
          console.log("Token received:", checkeddata.token); // Log the token
          localStorage.setItem("token", checkeddata.token);

          // Verify token was stored correctly
          const storedToken = localStorage.getItem("token");
          console.log("Token stored in localStorage:", storedToken);

          navigate("/");
        } else {
          console.error("No token received in login response");
          toast.error("Authentication error");
        }
      } else {
        toast.error("Incorrect Contact number", {
          className: "toast-error-red",
          progressClassName: "toast-progress-white",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  const handleLogin = () => {
    usercheck();
    // toast("Hello Geeks 3");
  };

  return (
    <div className="bglogin">
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
