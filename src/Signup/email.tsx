import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginGrid from "../Common/Grid/loginGrid";
import { useSelector } from "react-redux";

export default function Email() {
  const navigate = useNavigate();

  const [emailtext, emailfunc] = useState<string>("");

  const { username, phonenumber } = useSelector((state: any) => state.signup);

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
        alert(namedata.message);
        if (namedata.status == 1) {
          navigate("/");
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
    <div className="bglogin" style={{ height: "100vh" }}>
      <LoginGrid
        pagetitle={"Register TIX ID"}
        phonelabel={"EMAIL ADDRESS"}
        phoneholder={"Enter Input"}
        buttonname={"Register Now"}
        navto1={onsubmitdata}
        back={() => navigate("/signup")}
        show={false}
        // email = {false}
        flag={false}
        statefunc={emailfunc}
      />
    </div>
  );
}
