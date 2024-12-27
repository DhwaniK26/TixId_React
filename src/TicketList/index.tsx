import React, { useContext, useEffect, useRef } from "react";
import "./style.css";
import NoData from "./components/noData";
import Navbar from "../Common/Navbar/navbar";
import { MdOutlineEventNote } from "react-icons/md";
import { useState } from "react";
import { LuTicket } from "react-icons/lu";
import { AuthContext } from "../Context/loginContext";
import Circlebtn from "./components/circlebtn";
import MovTicketlst from "./components/movTicketlst";
import Spider from "../Assets/images/spider.png";
import Footer from "../Common/Footer/footer";
import Yemen from "../Assets/images/yowis1.png";
import Gucci from "../Assets/images/gucci.png";
import ghost from "../Assets/images/ghost.png";
import ends from "../Assets/images/ends.png";
import Emptycomp from "./components/empty";
import { useDispatch, useSelector } from "react-redux";
import { clearAuthState } from "../Redux/slice/authSlice";
import { setMovieData } from "../Redux/slice/ticketSlice";

export default function TicketList() {
  const movieImages: { [key: string]: string } = {
    "Spiderman: No way Home": Spider,
    "Yowis Ben Finale": Yemen,
    "House of Gucci": Gucci,
    "Ghostbusters: Afterlife": ghost,
    "It ends with us": ends,
  };

 
  const dispatch = useDispatch();
  const userphone = useSelector((state: any) => state.signup.phonenumber);

  const loginData = {
    userphone: userphone,
  };

  const formData = new URLSearchParams(loginData);

  const persistedMovieData = useSelector(
    (state: any) => state.ticket.moviedata
  );

  // Modify the ticketshow function
  const ticketshow = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:4000/testing/ticketlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      });

      const namedata = await response.json();

      if (namedata.message === " no user !") {
        dispatch(setMovieData([])); // Update Redux instead of local state
        return;
      }

      if (namedata.data.length === 0) {
        dispatch(setMovieData([]));
      } else {
        const processedData = namedata.data.map((elem: any) => {
          const myimg = elem.moviename;
          const originalDate = elem?.date + "T" + elem?.time;
          const dateObj = new Date(originalDate);
          const formattedDate = new Intl.DateTimeFormat("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }).format(dateObj);

          return {
            photu: movieImages[myimg],
            moviename: elem.moviename,
            date: formattedDate,
            theatre: elem.theatrename,
            screen: elem.screenname,
            done: elem.payment,
          };
        });

        dispatch(setMovieData(processedData));
      }
    } catch (error) {
      console.error("Error:", error);
      dispatch(setMovieData([]));
    }
  };
  const [option, setoption] = useState<string | null>("flag");
  const [isuser, setisuser] = useState<boolean | null>(true);
  const { isAuthenticated } = useContext(AuthContext);

  const handleclick = (elem: string) => {
    setoption(elem);
  };

  // useEffect(() => {
  //   // !isAuthenticated ? navigate("/login") : navigate("/ticketList");
  //   !userphone ? setisuser(false) : setisuser(true);
  //   ticketshow();
  // }, [userphone]);

  // useEffect(() => {
  //   if (!isAuthenticated || !userphone) {
  //     setisuser(false);
  //   } else {
  //     setisuser(true);
  //     ticketshow();
  //   }
  // }, [isAuthenticated, userphone]);

  useEffect(() => {
    // if (!isAuthenticated) {
    //   dispatch(clearAuthState(" "));
    // }
    ticketshow();
  }, []);

  const filteredMovies = persistedMovieData?.filter((movie: any) => movie.done);

  return (
    <div>
      <div className="main">
        <Navbar />
      </div>

      <div className="outermost">
        {/* GRID DIV */}
        <div className="mygrid-div">
          {/* FIRST COL */}
          <div className="grid-firstcol">
            <div
              className={`inner-firstcol ${option === "flag" ? "active" : ""}`}
              onClick={() => handleclick("flag")}
            >
              <LuTicket />
              <p>ACTIVE TICKET</p>
            </div>
            <hr></hr>

            <div
              className={`inner-firstcol ${option === "flag2" ? "active" : ""}`}
              onClick={() => handleclick("flag2")}
            >
              <MdOutlineEventNote />
              <p>TRANSACTION LIST</p>
            </div>
            <hr></hr>
          </div>

          {/* SECOND COL */}
          <div className="grid-secondcol">
            <div className="inner-secondcol">
              <h2>My Ticket</h2>
              <p className="c-grey">
                List of tickets and transactions you have made
              </p>
            </div>

            <div className="circlebtn-div">
              <Circlebtn text="Film" />
              <Circlebtn text="Event" />
              <Circlebtn text="Voucher" />
            </div>

            {!isAuthenticated || !isuser ? (
              <NoData />
            ) : !persistedMovieData || persistedMovieData.length === 0 ? (
              <Emptycomp />
            ) : (
              <div className="movielist">
                {option === "flag"
                  ? filteredMovies?.map((elem: any) => (
                      <MovTicketlst key={elem.id} {...elem} />
                    ))
                  : option === "flag2"
                  ? persistedMovieData?.map((elem: any) => (
                      <MovTicketlst key={elem.id} {...elem} />
                    ))
                  : null}
              </div>
            )}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
