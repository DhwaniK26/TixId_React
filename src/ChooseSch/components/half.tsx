import React, { useState } from "react";
import Theatre from "./column1Movie/theatre";
import TimeBoxes from "./column1Movie/timeBoxes";
import SmallButtons from "../../Common/Buttons/smallButtons";
// import {Tikimg} from "../../Assets/images/loadingposter.jpg"
import { useSelector, useDispatch } from "react-redux";
import SmTimeBox from "./column1Movie/smTimeBox";
import { useEffect } from "react";
import "../style.css";
import Loading from "../../Assets/images/loadingthet.png";

interface ScreenData {
  screenName: string;
  time: string;
  price: number;
}

interface Halfdata {
  search: string;
}

export default function Half({ search }: Halfdata) {
  const getlocation =
    useSelector((state: any) => state.chooseSch.location) || "Gujarat";
  const showmovie = useSelector((state: any) => state.home.selectedMovie);
  const date = useSelector((state: any) => state.chooseSch.date) || "5";

  //---------------------------------------------------------------------------------

  const [thetdata, setthetdata] = useState<Record<string, ScreenData[]>>({});

  function formatDate(inputDate: string) {
    const currentYear = new Date().getFullYear();
    const fullDate = new Date(`${inputDate} ${currentYear}`);

    const year = fullDate.getFullYear();
    const month = String(fullDate.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(fullDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const refinedDate = formatDate(date);

  interface LoginData {
    userlocation: string;
    usermoviename: string;
    userdate: string;
  }

  const loginData = {
    userlocation: getlocation,
    usermoviename: showmovie.name,
    userdate: refinedDate,
  };

  console.log("jjjjjjjjjjj", loginData);

  const formData = new URLSearchParams(loginData);

  const namefunc = async () => {
    await fetch(`http://127.0.0.1:4000/testing/choosesch`, {
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
        console.log("finlllyyyyy", namedata);

        if (namedata.answer.length > 0) {
          const alldata = namedata.answer.reduce((obj: any, elem: any) => {
            const theatreName = elem.screenid?.theatreid?.theatrename;
            const screenName = elem.screenid?.screenname;
            const time = elem.time;
            const price = elem.screenid?.price;

            if (theatreName && screenName && time && price) {
              if (!obj[theatreName]) {
                obj[theatreName] = []; //initialize an empty arr for theatrename
              }
              obj[theatreName].push({
                screenName,
                time,
                price,
              });
              return obj;
            } else {
              console.log("missing data");
            }
          }, {}); //initial value of object:obj is elem which is empty object

          setthetdata(alldata);
          console.log("display dattaaaaaa", thetdata);
        } else {
          console.log("no shows!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    console.log("on start", loginData);
    namefunc();
  }, [getlocation, date, showmovie]);

  //---------------------------------------

  const [selectedTimeId, setSelectedTimeId] = useState<string | null>(null);

  const handleColor = (id: string) => {
    setSelectedTimeId(id); // Update the selected time's ID
  };

  return (
    <div>
      {Object.keys(thetdata).length > 0 ? (
        Object.entries(thetdata).map(
          (
            [
              theatreName,
              screens,
            ] /*Theatrename: first arg: theatre's name and screens: subarray */
          ) => (
            <div key={theatreName}>
              <Theatre
                name={theatreName}
                button={
                  theatreName.includes("CGV") ? (
                    <SmallButtons text="CGV" color="red" size="13px" />
                  ) : theatreName.includes("SQUARE ") ? (
                    <SmallButtons
                      text="CINEPOLIS"
                      color="#000E62"
                      size="13px"
                    />
                  ) : theatreName.includes("XXI") ? (
                    <SmallButtons
                      text="XXI"
                      color="linear-gradient(to right, rgb(239, 211, 5) , rgb(183, 156, 3))"
                      size="13px"
                    />
                  ) : (
                    <SmallButtons text="CIN" color="red" size="13px" />
                  )
                }
              />
              <div className="time-division">
                {screens.map((screen: any, index: number) => {
                  const id = `${theatreName}-${screen.screenname}-${screen.time}`;

                  return (
                    <SmTimeBox
                      key={index}
                      id={id}
                      time={screen.time.slice(0, 5)}
                      price={screen.price}
                      screenname={screen.screenName}
                      theatrename={theatreName}
                      setcolor={handleColor}
                      isSelected={selectedTimeId === id} // Pass the selected state
                    />
                  );
                })}
              </div>
            </div>
          )
        )
      ) : (
        //
        <div style={{ textAlign: "center" }}>
          <img src={Loading} className="load-img" />
        </div>
      )}
    </div>
  );
}
