import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { settrue } from "../../Redux/slice/chooseSchSlice";
import { AuthContext } from "../../Context/loginContext";
import { useContext } from "react";

export default function TwoButtons() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const seats = useSelector((state: any) => state.seats.seats);

  const { isAuthenticated, login } = useContext(AuthContext);

  const goToAbout = () => {
    if (seats.length <= 0) {
      alert("Choose seats");
    } else {
      dispatch(settrue(true));
      isAuthenticated ? navigate("/payment") : navigate("/login");

      // if (username == null) {
      //   isAuthenticated ? navigate("/payment") : navigate("/login");
      // }
    }
  };

  const username = useSelector((state: any) => state.signup.phonenumber);

  return (
    <div>
      <div className="inner-pricedisplay">
        <button onClick={() => navigate("/schedule")} className="cc-grey">
          Return
        </button>
        <button onClick={goToAbout}>CONFIRM</button>
      </div>
    </div>
  );
}
