import React, { useState } from 'react'
import Navbar from '../Common/Navbar/navbar'
import Footer from '../Common/Footer/footer'
import './style.css'
import TitleText from '../Common/TitlesNText/titleText'
import ScrollBoxes from './components/scrollBoxes'
import Location from './components/images/pointer.png'
import LocationScroll from './components/locationScroll'
import Arrow from './components/images/arrow.png'
import Dropdowns from './components/dropdowns'
import SmallButtons from '../Common/Buttons/smallButtons'
import Theatre from './components/column1Movie/theatre'
import TimeBoxes from './components/column1Movie/timeBoxes'
import SpiderCard from './components/column2/spiderCard'
import FinalShow from './components/column2/finalShow'
import { useNavigate } from 'react-router-dom'


export default function Schedule() {

  const list1 = ["XXI", "2D", "CGV", "GOLD CLASS 2D", "VELVET 2D", "Cinepolis", "REGULAR 2D"]

  const list2 = ["Terdeket" , "Harga Termurah", "Alfabet"]

  const list3 = ["Terdeket" , "Harga Termurah", "Alfabet"]

  const [drop, setdrop] = useState(false)
  const [cityname, setcityname] = useState('CITY')
  
  const handlecityname = (namegiven : string) =>{
     setcityname(namegiven)
  }

  //-------------------------------------------------
  const t1=["2.00","3.00","4.00","5.00"]
  const t2=["2.00","3.00","4.00","5.00","2.00","3.00"]
  const t3=["2.00","3.00","4.00"]

  const t4=["2.00","3.00","4.00"]
  const t5=["2.00","3.00","4.00"]
  

  //-------recieved date data from child---------------------------
  const [datedata, setdatedata] = useState<any | null>(null)   //datedata has the date
  const handledatedata = (elem : string)=>{
     setdatedata(elem)
  }

  //-------recieved time, price,screentime data from child----------------------------

  const [timePrice, settimePrice] = useState<any | null>([]);

  const handletimePrice = (elem : any) => {
    settimePrice(elem.time); // Only set the selected time, replacing any previous selection
    console.log("thisssssssssss",elem.time)
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
          <div className='first-col1'>
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

              <div className='inp-drop1'>
                <div className='input-container-f'>
                  <input type='text'  />
                </div>
                <div className='dropdown-collect'>
                  <Dropdowns data={list1} title="Studio" />  <Dropdowns data={list2}  title="Sorting"/>  <Dropdowns data={list3} title="Bioskop"/>
                </div>
              </div>

              <div>
      
                 <Theatre name={"GRAND INDONESIA CGV"} 
                  button={<SmallButtons text="CGV" color="red" size="13px"/>}/>

                 <TimeBoxes screenname="REGULAR 2D" price="Rp. 2000" num={t1.length} timearray={t1} handletimePrice={handletimePrice} />
                 <TimeBoxes screenname="GOLD CLASS 2D" price="Rp. 100.00" num={t2.length} timearray={t2} handletimePrice={handletimePrice}/>
                 <TimeBoxes screenname="VELVET 2D" price="Rp. 100.00" num={t3.length} timearray={t3} handletimePrice={handletimePrice}/>

                 <Theatre name={"MANGGA DUA SQUARE CINÉPOLIS"} 
                  button={<SmallButtons text="cinepolis" color="rgb(2, 2, 131)" size="13px"/>}/>

                 <TimeBoxes screenname="2D" price="Rp. 30.000" num={t4.length} timearray={t4} handletimePrice={handletimePrice}/>

                 <Theatre name={"PLAZA INDONESIA XXI"} 
                  button={<SmallButtons text="XXI" color="linear-gradient(to right, rgb(239, 211, 5) , rgb(183, 156, 3))" size="13px" />}/>

                 <TimeBoxes screenname="2D" price="Rp. 50.000" num={t5.length} timearray={t5} handletimePrice={handletimePrice}/>
                 
              </div>
              
          </div>
        
         {/* SECOND GRID COL */}
         <div className='sec-div'>
           <SpiderCard />

           <FinalShow />
         </div>

     </div>
    </div>
        
    
    <Footer/>
    
  </div>
  )
}
