import React from "react";
import "../style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Txid from "../../Assets/images/tx.png";
import Hero1 from "../../Assets/images/hero1.png";
import Hero2 from "../../Assets/images/hero2.png";
import Insta from "../../Assets/images/insta.png";
import World from "../../Assets/images/world.png";
import Apple from "../../Assets/images/appleplay.png";
import Google from "../../Assets/images/googleplay.png";
import Tx2 from "../../Assets/images/tx2.png";
import Bg from "../../Assets/images/bg.png";

interface Arrows {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: Arrows) => {
  return (
    <div className="arrow2 next2" onClick={onClick}>
      ❯
    </div>
  );
};

const PrevArrow = ({ onClick }: Arrows) => {
  return (
    <div className="arrow2 prev2" onClick={onClick}>
      ❮
    </div>
  );
};

const Advertise = ({}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Pass custom next arrow
    prevArrow: <PrevArrow />, // Pass custom prev arrow
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 slide on mobile
        },
      },
    ],
  };

  return (
    <div className="carousel-container2">
      <Slider {...settings}>
        <div className="s1">
          <img src={Txid} className="logo" />

          <div className="inner-s1">
            <div>
              <h4>RENT/BUY MOVIES and</h4>
              <h4>SERIAL on TIX ID now</h4>

              <div className="inner-inner-s1">
                <img src={World} className="img-world" />
                <p>www.tx.id</p>
                <img src={Insta} className="img-small" />
                <p>tx_id</p>
              </div>
            </div>
            <div className="hero1">
              <img src={Hero1} />
            </div>
            <div className="hero2">
              <img src={Hero2} />
            </div>
          </div>
        </div>

        <div className="s2">
          <img src={Tx2} className="logodiv" />
          <h5>Download Now !</h5>
          <div>
            <img src={Apple} className="playbtn" />
            <span>
              {" "}
              <img src={Google} className="playbtn" />
            </span>
          </div>
        </div>

        <div className="s3">
          <h1>Order Movie Tickets at TIX ID</h1>
          <p>#QueueFree</p>
        </div>
      </Slider>
    </div>
  );
};

export default Advertise;
