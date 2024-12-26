import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style.css";
import Spider from "../../Assets/images/spider.png";
import Yemen from "../../Assets/images/img2.png";
import Gucci from "../../Assets/images/gucci.png";
import ghost from "../../Assets/images/ghost.png";
import ends from "../../Assets/images/ends.png";
import CarousalImages from "./carousalImages";
import MoviePosterLoading from "../../Assets/loading/moviePosterLoading";

interface Arrows {
  onClick?: () => void;
}

const NextArrow = ({ onClick }: Arrows) => {
  return (
    <div className="arrow next" onClick={onClick}>
      ❯
    </div>
  );
};

const PrevArrow = ({ onClick }: Arrows) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      ❮
    </div>
  );
};

const Carousel = () => {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 1, // 1 slide on mobile
        },
      },
    ],
  };

  //-------------------------------------------------------

  const [showmovie, showmoviefunc] = useState<any>(null);

  const displayMovies = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://127.0.0.1:4000/testing/home", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      const data = await response.json();
      showmoviefunc(data.movielist);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    displayMovies();
  }, []);

  const movieImages: { [key: string]: string } = {
    "Spiderman: No way Home": Spider,
    "Yowis Ben Finale": Yemen,
    "House of Gucci": Gucci,
    "Ghostbusters: Afterlife": ghost,
    "It ends with us": ends,
  };

  return (
    <div className="outer-div">
      <div className="carousel-container">
        {showmovie && showmovie.length > 0 ? (
          <Slider {...settings}>
            {showmovie.map((elem: any) => (
              <CarousalImages
                image={movieImages[elem.moviename]}
                moviename={elem.moviename}
              />
            ))}
          </Slider>
        ) : (
          <MoviePosterLoading />
        )}
      </div>
    </div>
  );
};

export default Carousel;

{
  /* <CarousalImages image={Spider} moviename="Spiderman: No way Home" />

          <CarousalImages image={Yemen} moviename="Yowis Ben Finale" />

          <CarousalImages image={Gucci} moviename="House of Gucci" />

          <CarousalImages image={ghost} moviename="Ghostbusters: Afterlife" /> */
}
