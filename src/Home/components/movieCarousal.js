import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";
import Spider from './images/spider.png'
import Yemen from './images/img2.png'
import Gucci from './images/gucci.png'
import ghost from './images/ghost.png'
import CarousalImages from "./CarousalImages";


const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      ❯
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      ❮
    </div>
  );
};

const Carousel = ({nextpage}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
   
   <div className="outer-div">
        <div className="carousel-container">
          
          <Slider {...settings}>
            <CarousalImages image={Spider} moviename="Spiderman: No way Home" nextpage={nextpage} />
            
            <CarousalImages image={Yemen} moviename="Yowis Ben Finale"  nextpage={nextpage}/>

            <CarousalImages image={Gucci} moviename="House of Gucci"  nextpage={nextpage}/>
             
            <CarousalImages image={ghost} moviename="Ghostbusters: Afterlife"   nextpage={nextpage}/>
          </Slider>
        </div>
      </div>

  
  );
};

export default Carousel;
