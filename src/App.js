import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/index';
import Contact from './Contact';
import About from './About';
import Schedule from './ChooseSch';
import Seats from './SeatsChoose';
import Payment from './ConPayment';
import Success from './Success';
import TicketList from './TicketList';
import FinalBill from './FinalBill';



export default function App() {
  
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/schedule" element={<Schedule/>} />
            <Route path="/seats" element={<Seats/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/success" element={<Success />} />
            <Route path="/ticketList" element={<TicketList />} />
            <Route path="/finalbill" element={<FinalBill />} />
          </Routes>
       </BrowserRouter>
    </div>
  );
      
}
