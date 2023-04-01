// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Nav from './components/Nav';
// import Main from './components/Main';
// import Footer from './components/Footer';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route} from 'react-router-dom' //react-router-dom has to be installed npm install react-router-dom
import Reservations from './pages/Reservations';
import Bookingdetails from './components/main/reservetable/main.bookingdetails.component';
import Findtable from './components/main/reservetable/main.findtable.component';
import Signup from './components/main/reservetable/main.signup.component';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          {/* The Children components within Reservation component here appear as "Outlet". Route should be set by Buttons */}
          <Route path='/Reservations' element={<Reservations/>}>
            <Route path='Findtable' element={<Findtable/>}/>
            <Route path='Signup' element={<Signup/>}/>
            <Route path='Bookingsdetails' element={<Bookingdetails/>}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
