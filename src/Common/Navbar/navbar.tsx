import React, { useContext, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "../style.css";
import Line from "../../Assets/images/line.png";
import Bell from "../../Assets/images/bell.png";
import TX from "../../Assets/images/tx.png";
import { AuthContext } from "../../Context/loginContext";
import { useSelector } from "react-redux";
import Logout from "./logout";

export default function Navbar() {
  const navigate = useNavigate();

  const userlogo = useSelector((state: any) => state.signup.userlogo);
  const firstletter = userlogo?.split("");

  const [logoutcomp, setlogoutcomp] = useState<boolean>(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <div>
      <div className="cont">
        <div className="navbar">
          <img src={TX} className="count" />
          <div className="ffh">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ticketList">My Ticket</Link>
              </li>
              <li>
                <Link to="/news">TIX ID News</Link>
              </li>
            </ul>

            <ul>
              <li>
                <img src={Line} height="24px" width="2px" alt="|" />
              </li>
              <li>
                <img src={Bell} height="30px" width="30px" alt="img" />
              </li>

              {!isAuthenticated ? (
                <>
                  <li onClick={() => navigate("/signup")}>Account Register</li>
                  <li>
                    <button onClick={() => navigate("/login")}>Login</button>
                  </li>
                </>
              ) : (
                <div
                  className="profile"
                  onClick={() => {
                    setlogoutcomp(!logoutcomp);
                  }}
                >
                  {firstletter[0]}
                  <div className="logout-par">
                    {logoutcomp ? <Logout /> : " "}
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
