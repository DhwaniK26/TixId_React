import React from 'react'
import { useState,useEffect } from 'react'
import './style.css'
import Navbar from '../Common/navbar'
import TitleText from '../Common/titleText'
import Arrdown from '../ChooseSch/components/images/arrowdown.png'
import Sorting from './components/sorting'
import Circlebtn from '../TicketList/components/circlebtn'
import MovieGrid from './components/movieGrid'
import Spider1 from './components/images/spider1.png'
import Yow from './components/images/yowis1.png'
import SmallMovieBars2 from '../Common/smallMovieBar2'
import Footer from '../Common/footer'


export default function News() {
  
  const [showsort, setshowsort] = useState(false)
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [propValue, setPropValue] = useState('default');

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    
    window.addEventListener('resize', handleResize);

    // Set prop value based on screen size
    if (screenSize <= 824) {
      setPropValue('');
    } else {
      setPropValue('row-reverse');
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenSize]);

  
  return (
    <div>
        <div className='main'>
          <Navbar />

          <TitleText title={'TIX ID News'} 
          subtitle={'The latest news about the world of cinema for you!'}/>
          
          <div className='mysearch-div'>
            <div className='input-container'>
                  <input type='text'  />
            </div>

            <div className='d-flex sort-drop'  >
                <p onClick={()=>setshowsort(!showsort)}>Sorting</p><span><img src={Arrdown} height={20} width={20}/></span>
                 {showsort ? <Sorting nosort={showsort} setnosort={setshowsort} /> : ""}
            </div>

          </div>   

          <div className='btn-collect d-flex '>
               <Circlebtn text="Spiderman" bor='1px solid #8F98AA' fontcolor='#8F98AA'/>
               <Circlebtn text="Peter Parker" bor='1px solid #8F98AA' fontcolor='#8F98AA'/>
               <Circlebtn text="Yowis Ben" bor='1px solid #8F98AA' fontcolor='#8F98AA'/>
               <Circlebtn text="Ghostbusters" bor='1px solid #8F98AA' fontcolor='#8F98AA'/>
               <Circlebtn text="Film Indonesia" bor='1px solid #8F98AA' fontcolor='#8F98AA'/>
               <Circlebtn text="Aksi" bor='1px solid #8F98AA' fontcolor='#8F98AA'/>
          </div>
          
            <MovieGrid myimg={Spider1} movname={'Spider-Man: No Way Home Releases New Trailer'}
            movinfo={"Spider-Man: No Way Home is a highly anticipated film by many. This film is a continuation of Peter Parker's story in ..."}
            movdate={'Nov 17, 2021 | TIX ID'} justc={'flex-start'} mycontent={'spider'}/>
         
            <MovieGrid myimg={Yow} movname={'Facts About Yowis Ben Finale That You Need to Know Before Watching!'}
              movinfo={"Film Yowis Ben Finale merupakan film akhir dari tetralogi film Yowis Ben. Film yang disutradai oleh Bayu Eko Moektito atau yang biasa ..."}
              movdate={'Nov 06, 2021 | TIX ID'} colrev={propValue} mycontent={'yow'}/>
         

          <div className='mov-bars'>
           <SmallMovieBars2 />
          </div>

        </div>
        <Footer />
      
    </div>
  )
}
