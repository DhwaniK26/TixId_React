import React, { useContext } from 'react'
import { Outlet, Link, useNavigate} from "react-router-dom";
import './style.css'
import Line from './images/line.png';
import Bell from './images/bell.png'
import TX from './images/tx.png' ;
import { AuthContext } from '../loginContext';


export default function Navbar() {

  const navigate = useNavigate()

  const {isAuthenticated, logout} = useContext(AuthContext)

  return (
    <div>
    <div class="cont">
       <div class="navbar" >
          <img src={TX}
          class="count"/> 
          <div class="ffh">
            <ul>
              <li>
                <Link to='/'>Home</Link>  
              </li>
              <li>
                <Link to='/ticketList'>My Ticket</Link>  
              </li> 
              <li>
                <Link to='/news'>TIX ID News</Link>
              </li>
            </ul>

         
            <ul>
              <li><img src={Line} height="24px" width="2px" alt="|"/></li>
              <li><img src={Bell} height="30px" width="30px" alt="img"/></li>

              {!isAuthenticated ? 
                <><li>Account Register</li> 
                <li><button onClick={()=>navigate('/login')} >Masuk</button></li></>
                : <div className='profile' onClick={()=>logout()}>A</div>}
              
            </ul>
            

          </div>
      </div>
    </div>

      <Outlet />
    </div>
  )
}
