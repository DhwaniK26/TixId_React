import React, { useState } from 'react'
import Navbar from '../Common/navbar'
import Footer from '../Common/footer'
import './style.css'
import TitleText from '../Common/titleText'
import ScrollBoxes from './components/scrollBoxes'
import Location from './components/images/pointer.png'
import LocationScroll from './components/locationScroll'
import Arrow from './components/images/arrow.png'
import Dropdowns from './components/dropdowns'
import SmallButtons from '../Common/smallButtons'
import Theatre from './components/Column1Movie/theatre'
import TimeBoxes from './components/Column1Movie/timeBoxes'
import SpiderCard from './components/Column2/spiderCard'
import FinalShow from './components/Column2/finalShow'
import { useNavigate } from 'react-router-dom'

export default function Schedule() {

  const list1 = ["XXI", "2D", "CGV", "GOLD CLASS 2D", "VELVET 2D", "Cinepolis", "REGULAR 2D"]

  const list2 = ["Terdeket" , "Harga Termurah", "Alfabet"]

  const [drop, setdrop] = useState(false)
  const [cityname, setcityname] = useState('CITY')
  
  const handlecityname = (namegiven) =>{
     setcityname(namegiven)
  }

  //-------------------------------------------------
  const t1=["2.00","3.00","4.00","5.00"]
  const t2=["2.00","3.00","4.00","5.00","2.00","3.00"]
  const t3=["2.00","3.00","4.00"]

  const t4=["2.00","3.00","4.00"]
  const t5=["2.00","3.00","4.00"]
  


  //----------showtimes-------------------------------
  const navigate = useNavigate(); // useNavigate hook for navigation

  const goToAbout = () => {
    // navigate('/about'); // Navigate to the 'About' page
    navigate('/seats'); // Navigate to the 'About' page
  };

  //-------recieved date data from child---------------------------
  const [datedata, setdatedata] = useState(null)   //datedata has the date
  const handledatedata = (elem)=>{
     setdatedata(elem)
  }

  //-------recieved time, price,screentime data from child----------------------------

  const [timePrice, settimePrice] = useState(null)
  const handletimePrice = (elem)=>{
    settimePrice(elem)
  }
 
  //--------

  return (
   <div>
    <div className='main'>
      <Navbar />
      <TitleText title="JADWAL" subtitle="Pilih jadwal bioskop yang akan kamu tonton" />
      
      {/* GRID START */}
      <div className='grid-class'>
         
         {/* FIRST GRID COL */}
          <div className='first-col'>
              <ScrollBoxes handledatedata={handledatedata} />
              <hr></hr>
              
              <div className='loc-div'>
                <img src={Location} height={32} width={32}/>
                <h2>{cityname}</h2>

                <button className='arrowbtn' onClick={()=>setdrop(!drop)}>
                   <img src={Arrow} height={7.5} width={15}/>
                </button>

                <div className='inner-div'>
                   {drop ? <LocationScroll notshow={drop} setfalse={setdrop} namepassed={handlecityname}/> : ""}
                </div>
              </div>

              <div className='inp-drop'>
                <div className='input-container-f'>
                  <input type='text'  />
                </div>
                <div className='dropdown-collect'>
                  <Dropdowns data={list1} title="Studio" />  <Dropdowns data={list2}  title="Sorting"/>  <Dropdowns data=" " title="Bioskop"/>
                </div>
              </div>

              <div>
      
                 <Theatre name={"GRAND INDONESIA CGV"} 
                  button={<SmallButtons text="CGV" color="red" size="13px"/>}/>

                 <TimeBoxes screenname="REGULAR 2D" price="Rp. 2000" num={t1.length} timearray={t1} handletimePrice={handletimePrice}/>
                 <TimeBoxes screenname="GOLD CLASS 2D" price="Rp. 100.00" num={t2.length} timearray={t2}/>
                 <TimeBoxes screenname="VELVET 2D" price="Rp. 100.00" num={t3.length} timearray={t3}/>

                 <Theatre name={"MANGGA DUA SQUARE CINÉPOLIS"} 
                  button={<SmallButtons text="cinepolis" color="rgb(2, 2, 131)" size="13px"/>}/>

                 <TimeBoxes screenname="2D" price="Rp. 30.000" num={t4.length} timearray={t4}/>

                 <Theatre name={"PLAZA INDONESIA XXI"} 
                  button={<SmallButtons text="XXI" color="linear-gradient(to right, rgb(239, 211, 5) , rgb(183, 156, 3))" size="13px" />}/>

                 <TimeBoxes screenname="2D" price="Rp. 50.000" num={t5.length} timearray={t5}/>
                 
              </div>
              
          </div>
        
         {/* SECOND GRID COL */}
         <div className='sec-div'>
           <SpiderCard />

           <FinalShow nextpage={goToAbout} />
         </div>

     </div>
    </div>
        
    
    <Footer/>
    
  </div>
  )
}
