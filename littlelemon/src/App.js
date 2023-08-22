import './App.css';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route} from 'react-router-dom' //react-router-dom has to be installed npm install react-router-dom
import Reservations from './pages/Reservations';
import Bookingdetails from './components/main/reservetable/main.bookingdetails.component';
import Findtable from './components/main/reservetable/main.findtable.component';
import Signup from './components/main/reservetable/main.signup.component';

import {fetchAPI} from './api/api';
import { useState, useReducer } from 'react';

const year = new Date().getFullYear().toString();
const month = (new Date().getMonth() + 1).toString();
const day = new Date().getDate().toString();
const todaydate = year + "-" + month + "-" + day;


function App() {

  let tableObject = {
    date: "Select One",//todaydate,
    time: "Select One",
    dinners: "Select One",
    occasion: "Select One",
    fullname: "",
    email: "",
    phone: "",
    communication: ""

  };



  const [selectedDate, setDate]=useState(tableObject.date);
  const [selectedTime, setTime]=useState(tableObject.time);
  const [selectedDinners, setDinners]=useState(tableObject.dinners);
  const [selectedOccasion, setOccasion]=useState(tableObject.occasion);
  const [selectedFullName, setFullName]=useState(tableObject.fullname);
  const [selectedEmail, setEmail]=useState(tableObject.email);
  const [selectedPhone, setPhone]=useState(tableObject.phone);
  const [selectedCommunication, setCommunication]=useState(tableObject.communication);


  const currentBooking = {
    selectedDate: selectedDate, 
    selectedTime: selectedTime,
    selectedDinners: selectedDinners,
    selectedOccasion: selectedOccasion,
    selectedFullName: selectedFullName,
    selectedEmail: selectedEmail,
    selectedPhone: selectedPhone,
    selectedCommunication: selectedCommunication
  };



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* The Children components within Reservation component here appear as "Outlet". Route should be set by Buttons */}
          <Route path='/Reservations' element={<Reservations/>}>
            <Route path='Findtable' element={<Findtable
            tableprops={tableObject}
            currentBooking = {currentBooking}
            todaydate = {todaydate}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedDinners={selectedDinners}
            selectedOccasion={selectedOccasion}
            setDate={setDate}
            setTime={setTime}
            setDinners={setDinners}
            setOccasion={setOccasion}
            setFullName={setFullName}
            setEmail={setEmail}
            setPhone={setPhone}
            setCommunication={setCommunication}

            />}/>
            <Route path='Signup' element={<Signup/>}/>
            <Route path='Findtable/Signup' element={<Signup/>}/>
            <Route path='Findtable/Signup/Booking' element={<Bookingdetails currentBooking={currentBooking}  />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
