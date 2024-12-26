import React from "react";
import "../style.css";
import { IoLogOutOutline } from "react-icons/io5";
import { AuthContext } from "../../Context/loginContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const getlogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <div className="logout-main" onClick={getlogout}>
        <IoLogOutOutline />
        <b>Logout</b>
      </div>
    </div>
  );
}
