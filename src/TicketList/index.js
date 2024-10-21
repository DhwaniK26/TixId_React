import React, { useEffect, useRef } from 'react'
import './style.css'
import Navbar from '../Common/navbar'
import { MdOutlineEventNote } from "react-icons/md";
import { useState} from 'react'
import { LuTicket } from "react-icons/lu";
import Circlebtn from './components/circlebtn';
import MovTicketlst from './components/movTicketlst';
import Spider from '../Home/components/images/spider.png'
import Tenet from './components/images/tenet.png'
import Wick from './components/images/wick.png'
import Avenge from './components/images/aveng.png'
import Footer from '../Common/footer';

export default function TicketList() {

  const [option, setoption] = useState(null)
  
  const handleclick = (elem)=>{
    setoption(elem)
  }

  //-----------movie data---------------------------------------------

  const moviedata = [
    {photu: Spider, moviename:'Spiderman: No Way Home', date:'Thursday, December 16, 2021, 14:40', theatre:'Grand Indonesia ', screen :'(Regular 2D)' ,done:true},
    {photu: Tenet, moviename:'Tenet', date:'Thursday, December 16, 2021, 14:40', theatre:'Grand Indonesia ', screen :'(Regular 2D)' ,done:false},
    {photu: Tenet, moviename:'Tenet', date:'Thursday, December 16, 2021, 14:40', theatre:'Grand Indonesia ', screen :'(Regular 2D)' ,done:true},
    {photu: Wick, moviename:'John Wick: Chapter 3 - Parabellum ', date:'Thursday, December 16, 2021, 14:40', theatre:'Grand Indonesia ', screen :'(Regular 2D)' ,done:true},
    {photu: Avenge, moviename:'Avengers: Endgame', date:'Thursday, December 16, 2021, 14:40', theatre:'Grand Indonesia ', screen :'(Regular 2D)' ,done:true}

  ]
 
  const filteredMovies = moviedata.filter(movie => movie.done === true)

  useEffect(()=>{
    setoption('flag')
  },[])
  return (
    <div>
     <div className='main'>
       <Navbar />
     </div>

     <div className='outermost'>
        {/* GRID DIV */}
        <div className='mygrid-div'>
          
          {/* FIRST COL */}
          <div className='grid-firstcol'>

            <div className={`inner-firstcol ${option === 'flag' ? 'active' : ''}`} onClick={()=>handleclick('flag')} >
                <LuTicket />
                <p>ACTIVE TICKET</p>

            </div>
            <hr></hr>

            <div className={`inner-firstcol ${option === 'flag2' ? 'active' : ''}`} onClick={()=>handleclick('flag2')} >
                <MdOutlineEventNote />
                <p>TRANSACTION LIST</p>
            </div>
            <hr></hr>
          </div>
  
          {/* SECOND COL */}
          <div className='grid-secondcol'>
            <div className='inner-secondcol'>
               <h2>My Ticket</h2>
               <p className='c-grey'>List of tickets and transactions you have made</p>
            </div>

            <div className='circlebtn-div'>
              <Circlebtn text="Film" flag={"f1"}/>
              <Circlebtn text="Event" flag={"f2"}/>
              <Circlebtn text="Voucher" flag={"f3"}/>
            </div>
            
            <div className='movielist'>
              {option === 'flag' ? 
                  filteredMovies.map((elem)=><MovTicketlst photu={elem.photu} moviename={elem.moviename} date={elem.date} theatre={elem.theatre} screen={elem.screen} done={elem.done}  />) 
                  : option === 'flag2' ? moviedata.map((elem)=> <MovTicketlst photu={elem.photu} moviename={elem.moviename} date={elem.data} theatre={elem.theatre} screen={elem.screen} done={elem.done} />) : ""}
              
            </div>

          </div>
  
        </div>

      
      </div>

      <div>
      <Footer />
      </div>
 
    </div>
    
  )
}
