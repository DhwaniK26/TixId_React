import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginGrid from "../Common/Grid/loginGrid";
import { useSelector } from "react-redux";
import { AuthContext } from "../Context/loginContext";
import { useContext } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

export default function Email() {
  const navigate = useNavigate();

  const [emailtext, emailfunc] = useState<string>("");

  const { username, phonenumber } = useSelector((state: any) => state.signup);

  const { login } = useContext(AuthContext);

  const postData = {
    username: username,
    phonenumber: phonenumber,
    email: emailtext,
  };

  const formData = new URLSearchParams(postData);

  const namefunc = async () => {
    await fetch(`http://127.0.0.1:4000/testing`, {
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
        console.log("email data", namedata);
        // alert(namedata.message);
        if (namedata.errors) {
          namedata.errors
            .filter((elem: any) => elem.property === "email")
            .forEach((elem: any) => {
              toast.error(elem.constraints.isEmail, {
                className: "toast-error-red", // Custom class for error background
                progressClassName: "toast-progress-white", // Custom class for progress bar
              });
            });
        }
        if (namedata.status == 1) {
          login();
          navigate("/");
          toast.error(namedata.message, {
            className: "toast-error-red", // Custom class for error background
            progressClassName: "toast-progress-white", // Custom class for progress bar
          });
        } else {
          toast.error(namedata.message, {
            className: "toast-error-red", // Custom class for error background
            progressClassName: "toast-progress-white", // Custom class for progress bar
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const onsubmitdata = () => {
    namefunc();
  };

  return (
    <div className="bglogin2" style={{ height: "100vh" }}>
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
        pagetitle={"Register TIX ID"}
        phonelabel={"EMAIL ADDRESS"}
        phoneholder={"Enter Input"}
        buttonname={"Register Now"}
        navto1={onsubmitdata}
        back={() => navigate("/signup")}
        show={false}
        flag={false}
        statefunc={emailfunc}
      />
    </div>
  );
}
