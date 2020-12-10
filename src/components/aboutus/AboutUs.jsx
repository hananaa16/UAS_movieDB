import React from "react";
import { Nav } from 'react-bootstrap';
import hana from './hana.jpg';
import denisha from './denisha.jpg';
import irena from './iren.jpg';

export function AboutUs() {

  return (
    <div className="container">
      <h1 className="mt-3" style={{ textAlign: "center"}}>Dream On! Cinema</h1><br></br>
      <Nav className="ml-auto justify-content-center" defaultActiveKey="/">
        <Nav.Item className="mynav2"><Nav.Link href="/">Home</Nav.Link></Nav.Item>
        <Nav.Item className="mynav2"><Nav.Link href="/nowplaying/NowPlaying">Now Playing</Nav.Link></Nav.Item>
        <Nav.Item className="mynav2"><Nav.Link href="/popular/Popular">Popular</Nav.Link></Nav.Item>
        <Nav.Item className="mynav2"><Nav.Link href="/upcoming/Upcoming">Upcoming</Nav.Link></Nav.Item>
      </Nav><br></br>
      <h1 style={{textAlign: "center"}}>About Us</h1>
      <div className="row mt-3 mb-5">
        <div className="col-md-4" style={{ color: "white", textAlign: "center" }}>
            <img className="img-fluid" src={hana} alt="hana" style= {{height:"300px"}}></img>
        </div>
        <div className="col-md-4" style={{ color: "white", textAlign: "center" }}>
            <img className="img-fluid" src={irena} alt="irena" style= {{height:"300px"}}></img>
        </div>
        <div className="col-md-4" style={{ color: "white", textAlign: "center" }}>
        <img className="img-fluid" src={denisha} alt="denisha" style= {{height:"300px"}}></img>
        </div>
       </div>
    
    </div>
  );
}
