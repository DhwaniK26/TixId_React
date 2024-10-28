import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home/index';
import Schedule from './ChooseSch';
import Seats from './SeatsChoose';
import Payment from './ConPayment';
import Success from './Success';
import TicketList from './TicketList';
import FinalBill from './FinalBill';
import ComingSoon from './ComingSoon';
import News from './News';
import Article from './Article';
import Signup from './Signup';
import Login from './Login';
import Email from './Signup/email';
import { AuthContext, AuthProvider } from './loginContext';

export default function App() {
  
  return (
    <div>
     <AuthProvider>
       <BrowserRouter>
           <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/schedule" element={<Schedule/>} />
             <Route path="/seats" element={<Seats/>} />
             <Route path="/payment" element={<Payment/>} />
             <Route path="/success" element={<Success />} />
             <Route path="/ticketList" element={<TicketList />} />
             <Route path="/finalbill" element={<FinalBill />} />
             <Route path="/comingSoon" element={<ComingSoon />} />
             <Route path="/news" element={<News />} />
             <Route path="/article" element={<Article />} />
             <Route path="/signup" element={<Signup />} />
             <Route path="/login" element={<Login />} />
             <Route path="/email" element={<Email />} />
           </Routes>
        </BrowserRouter>
        </AuthProvider>
    
    </div>
  );
      
}
