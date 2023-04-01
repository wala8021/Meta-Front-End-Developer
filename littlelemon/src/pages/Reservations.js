import Header from '../components/header/Header.component';
import Nav from '../components/nav/Nav.component';
import Main from '../components/main/Main.component';
import Footer from '../components/footer/Footer.component';

import Findtable from '../components/main/reservetable/main.findtable.component';
import { Outlet } from 'react-router-dom';

export default function Reservations(){
    return (
        <>
          <Header/>
          <Nav/>
          <Outlet/>
          <Footer/>
      </>
    )
}