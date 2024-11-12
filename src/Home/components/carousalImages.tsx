import React from "react";
import "../style.css";
import SmallButtons from "../../Common/Buttons/smallButtons";
import { setmovie } from "../../Redux/slice/homeSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface TextType {
  image: string;
  moviename: string;
}

export default function CarousalImages({ image, moviename }: TextType) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handlemoviedata = () => {
    navigate("./schedule");
    dispatch(
      setmovie({
        name: moviename,
        poster: image,
      })
    );
  };

  return (
    <div>
      <div className="card" onClick={handlemoviedata}>
        <img src={image} className="myimg" />
        <div className="text-div">
          <h2>{moviename}</h2>
          <ul>
            <li>
              <SmallButtons
                sendfunc={handlemoviedata}
                text="XXI"
                color="linear-gradient(to right, rgb(239, 211, 5) , rgb(183, 156, 3))"
                size="11px"
              />
            </li>
            <li>
              <SmallButtons
                sendfunc={handlemoviedata}
                text="CGV"
                color="red"
                size="11px"
              />
            </li>
            <li>
              <SmallButtons
                sendfunc={handlemoviedata}
                text="CINPOLIS"
                color="rgb(2, 2, 131)"
                size="11px"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
