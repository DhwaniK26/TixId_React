import React, { useEffect, useState } from 'react'
import './style.css'
import MainArticle from './components/mainArticle'
import { useLocation } from 'react-router-dom'
import Navbar from '../Common/navbar'
import SmallMovieBars2 from '../Common/smallMovieBar2'
import Footer from '../Common/footer'
import MainVideo from './components/mainVideo'

export default function Article() {

  const location = useLocation()
  const {flag} = location.state || {}

  const [screenshow, setscshow] = useState(null);

  function random() {
  // flag === 'spider' ? 
  //   setscshow(<MainArticle />)
  // : flag === 'spi-video' ?
  //   setscshow(<MainVideo />) : ''

    if(flag === 'spider'){
      setscshow(<MainArticle />)
    }else if(flag === 'spi-video'){
      setscshow(<MainVideo />)
    }
  }
  useEffect(()=>{
     random()
  },[screenshow])

  return (
    <div>
        <div className='main'>
          <Navbar />
        
        <div className='article-holder'>
            {screenshow}
        </div>

        <SmallMovieBars2 />
        </div>

        <Footer />
    </div>
  )
}
