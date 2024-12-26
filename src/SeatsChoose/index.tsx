import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import Navbar from "../Common/Navbar/navbar";
import TitleText from "../Common/TitlesNText/titleText";
import SeatCol from "./components/seatCol";
import Pricebox from "./components/pricebox";
import Footer from "../Common/Footer/footer";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setseats, settotalprice, settrue } from "../Redux/slice/seatsSlice";
import TwoButtons from "./components/twoButtons";
import Timedrop from "./components/timedrop";

export default function Seats() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [first, setfirst] = useState<any>(null);
  const [sec, setsec] = useState<any>(null);
  const [unavilarr, setunavail] = useState<any>(null);

  const getscreenname = useSelector((state: any) => state.chooseSch.screenName);

  //getting seat number--------------------------------------------------------

  const [chair, setchair] = useState<string | any>([]); //chairs array

  const handlechair = (elem: string) => {
    let updatedChair;

    if (chair.includes(elem)) {
      // Remove elem from chair
      updatedChair = chair.filter((item: any) => item !== elem);
    } else {
      // Add elem to chair-------only 5
      updatedChair = [...chair, elem];
      if (chair.length > 4) {
        updatedChair = chair.slice(-4);
      }
    }

    setchair(updatedChair);
    dispatch(setseats(updatedChair));
  };

  //total price of seats--------------------------------------------------------

  const money = useSelector((state: any) => state.chooseSch.money);

  const [totalamt, settotal] = useState<number>(0);

  useEffect(() => {
    // selected ? navigate("/seats") : navigate("/schedule");

    var totalprice = 0;
    for (var i = 0; i <= chair.length; i++) {
      var totalprice = money * i;
    }
    settotal(totalprice);
    dispatch(settotalprice(totalamt));
  }, [chair]);

  //----------------------------------------fetch----------------------------------

  const loginData = {
    userscreenname: getscreenname,
  };

  console.log("seat data", loginData);

  const formData = new URLSearchParams(loginData);

  const displayfunc = async () => {
    await fetch(`http://127.0.0.1:4000/testing/seats`, {
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
        console.log("seatkadata", namedata);
        const midpoint = Math.floor(
          (namedata.seatkadata.start_num + namedata.seatkadata.end_num) / 2
        );

        const firstPart = {
          start: namedata.seatkadata.start_num,
          end: midpoint,
        };
        const secondPart = {
          start: midpoint + 1,
          end: namedata.seatkadata.end_num,
        };

        const firstarr = namedata.seatkadata.row;
        const secondarr = namedata.seatkadata.row;

        setfirst({ firstPart, firstarr });
        setsec({ secondPart, secondarr });

        console.log("firsttttttttttttttt", first);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  //----------------avail---------------------------------------
  const usermoviename = useSelector(
    (state: any) => state.home.selectedMovie.name
  );
  const usertheatrename = useSelector(
    (state: any) => state.chooseSch.theatreName
  );
  const userscreenname = useSelector(
    (state: any) => state.chooseSch.screenName
  );
  const usertime =
    useSelector((state: any) => state.chooseSch.selecttime.time) + ":00";

  const date = useSelector((state: any) => state.chooseSch.date) || "5";

  function formatDate(inputDate: string) {
    const currentYear = new Date().getFullYear();
    const fullDate = new Date(`${inputDate} ${currentYear}`);

    const year = fullDate.getFullYear();
    const month = String(fullDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(fullDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const refinedDate = formatDate(date);

  const divide = {
    usermoviename,
    usertheatrename,
    userscreenname,
    usertime,
    userdate: refinedDate,
  };

  const formData2 = new URLSearchParams(divide); // Append the serialized data as a string

  const seatunavail = async () => {
    try {
      const token = localStorage.getItem("token");

      // Checking if token exists
      if (!token) {
        console.log("No token found");
        navigate("/login");
        return;
      }

      const response = await fetch("http://127.0.0.1:4000/testing/seatavail", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData2,
      });

      if (!response.ok) {
        if (response.status === 401) {
          console.log("Unauthorized access");
          navigate("/login");
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Seat availability data:", data);
      setunavail(data.unavailable);
      console.log("Updated unavailable array:", unavilarr);
    } catch (error) {
      console.error("Error fetching seat availability:", error);
    }
  };

  useEffect(() => {
    displayfunc();
    seatunavail();
  }, []);

  return (
    <div>
      <div className="main">
        <Navbar />

        <TitleText
          title="CHOOSE A SEAT"
          subtitle="Choose the seat you will occupy during the film screening."
        />

        <div className="seats-div">
          <Timedrop />

          {/* SEATS SELECTION */}

          <div className="all-seats-grid">
            <SeatCol
              start={first ? first.firstPart.start : ""}
              end={first ? first.firstPart.end : " "}
              rows={first ? first.firstarr : []}
              handlechair={handlechair}
              unavailarr={unavilarr}
            />
            <SeatCol
              start={sec ? sec.secondPart.start : ""}
              end={sec ? sec.secondPart.end : " "}
              rows={sec ? sec.secondarr : []}
              handlechair={handlechair}
              unavailarr={unavilarr}
            />
          </div>
        </div>
      </div>

      {/* BLUE STRAP */}

      <div className="blue-strap">
        <p>Cinema Screen Here</p>
      </div>

      {/* PRICE SECTION */}
      <div className="main">
        <div className="pricedisplay-div">
          <Pricebox title="Total" content={totalamt} size="1.5rem" />
          <Pricebox
            title="Kursi"
            content={chair.map((ele: string) => {
              return ele + " ";
            })}
            size="1.5rem"
          />

          <TwoButtons />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
