// import '../stylesheet/mystyles.css'; //applying css styles, you just import ONLY
// import Header from '../components/Header';
// import Nav from '../components/Nav';
// import Main from '../components/Main';
// import Footer from '../components/Footer';

// export default function Home(){
//     return (
//         <>
//         <div class="top-parent">
//         <div class="header">  <Header/> </div>
//         <div class="nav">    <Nav/></div>
//       </div>
//       <Main/>
//       <Footer/>
//       </>
//     )
// }


import Header from '../components/header/Header.component';
import Nav from '../components/nav/Nav.component';
import Main from '../components/main/Main.component';
import Footer from '../components/footer/Footer.component';

export default function Home(){
    return (
        <>
          <Header/>
          <Nav/>
          <Main/>
          <Footer/>
      </>
    )
}