import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import hana from './hana.jpg';
import denisha from './denisha.jpg';
import irena from './iren.jpg';

export function AboutUs() {

  return (
    <div>
      <Navbar className="col-lg-12 color-nav">
        <Navbar.Brand href="/">Dream On! Cinema</Navbar.Brand>
        <Nav className="mr-auto justify-content-center" defaultActiveKey="/aboutUs/AboutUs">
          <Nav.Item className="mynav2 ml-3 col-nav"><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item className="mynav2 ml-3"><Nav.Link href="/nowplaying/NowPlaying">Now Playing</Nav.Link></Nav.Item>
          <Nav.Item className="mynav2 ml-3"><Nav.Link href="/popular/Popular">Popular</Nav.Link></Nav.Item>
          <Nav.Item className="mynav2 ml-3"><Nav.Link href="/upcoming/Upcoming">Upcoming</Nav.Link></Nav.Item>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Item className="mynav mr-sm-2"><Nav.Link href="/aboutUs/AboutUs">About Us</Nav.Link></Nav.Item>
        </Nav>
      </Navbar><br></br>
      <div className="container">
      <h1 style={{textAlign: "center"}}>About Us</h1>
      <h3 style={{textAlign: "center"}}>C# Group. (IF300-E) Introduction to Internet Technology Project Test </h3>
      <div className="row mt-3 mb-5">
        <div className="col-md-4" style={{ color: "white", textAlign: "center" }}>
            <img className="img-fluid" src={hana} alt="hana" style= {{height:"300px"}}></img>
            <p>Hana Agatha</p>
        </div>
        <div className="col-md-4" style={{ color: "white", textAlign: "center" }}>
            <img className="img-fluid" src={irena} alt="irena" style= {{height:"300px"}}></img>
            <p>Tania Irena Gunawan</p>
        </div>
          <div className="col-md-4" style={{ color: "white", textAlign: "center" }}>
          <img className="img-fluid" src={denisha} alt="denisha" style= {{height:"300px"}}></img>
            <p>Anastasia Denisha Danoehoesodo</p>  
        </div>
       </div>
       </div>
    </div>
  );
}
