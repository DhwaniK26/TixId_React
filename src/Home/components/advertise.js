import React from 'react'
import '../style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Txid from '../../Common/images/tx.png'
import Hero1 from './images/hero1.png'
import Hero2 from './images/hero2.png'
import Insta from '../../Common/images/insta.png'
import World from './images/world.png'
import Apple from '../../Common/images/appleplay.png'
import Google from '../../Common/images/googleplay.png'
import Tx2 from './images/tx2.png'
import Bg from './images/bg.png'


const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow2 next2" onClick={onClick}>
        ❯
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
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
                    <img src={Txid} className="logo"  />
                    
                    <div className="inner-s1">
                        <div>
                            <h4>SEWA/BELI FILM dan</h4>
                            <h4>SERIAL di TIX ID sekarang</h4>
                            
                            <div className="inner-inner-s1">
                                <img src={World} className="img-world" />
                                <p>www.tx.id</p>
                                <img src={Insta} className="img-small" />
                                <p>tx_id</p>
                            </div>
                        </div>
                        <div className="hero1">
                            <img src={Hero1}/>
                        </div>
                        <div className="hero2">
                          <img src={Hero2} />
                      </div>
                    </div>
                </div>
                  

                <div className="s2">
                    <img src={Tx2} className="logodiv"/>
                    <h5>Download Sekarang !</h5>
                    <div>
                      <img src={Apple} className="playbtn" /><span> <img src={Google}  className="playbtn"/></span>
                    </div>
                </div>

                <div class="s3">
                    <h1>Pesan Tiket Film di TIX ID</h1>
                    <p>#BebasAntri</p>
                </div>

            </Slider>
          </div>  
    
    );
  };
  
export default Advertise;

