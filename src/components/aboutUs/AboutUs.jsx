import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import hana from './hana.jpg';
import denisha from './denisha.jpg';
import irena from './iren.jpg';
import umn from './umn.png';

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
      <h3 style={{textAlign: "center"}}>C# Group. (IF300-E & IF300-EL) Introduction to Internet Technology Project Test </h3>
      <div className="row mt-3 mb-5">
        <div className="col-md-4" style={{ color: "white", textAlign: "center" }}>
            <img className="img-fluid" src={hana} alt="hana" style= {{height:"300px"}}></img>
            <br></br>
            <p style={{ fontSize: "30px" }}>Hana Agatha</p>
            <p style={{ fontSize: "20px" }}>00000035764</p>
            <a href="https://www.instagram.com/h_agatha/?hl=id" target="_blank" rel="noopener noreferrer" style={{ color: "#f4c10f", fontSize: "50px" }}>
                <i className="fab fa-instagram"></i>
            </a>
        </div>
        <div className="col-md-4" style={{ color: "white", textAlign: "center" }}>
            <img className="img-fluid" src={irena} alt="irena" style= {{height:"300px"}}></img>
            <p style={{ fontSize: "30px" }}>Tania Irena</p>
            <p style={{ fontSize: "20px" }}>00000035961</p>
            <a href="https://www.instagram.com/tanikohiranuma/?hl=id" target="_blank" rel="noopener noreferrer" style={{ color: "#f4c10f", fontSize: "50px" }}>
                <i className="fab fa-instagram"></i>
            </a>
        </div>
          <div className="col-md-4" style={{ color: "white", textAlign: "center" }}>
          <img className="img-fluid" src={denisha} alt="denisha" style= {{height:"300px"}}></img>
            <p style={{ fontSize: "30px" }}>Anastasia Denisha</p>
            <p style={{ fontSize: "20px" }}>00000034981</p>
            <a href="https://www.instagram.com/denisha26/?hl=id" target="_blank" rel="noopener noreferrer" style={{ color: "#f4c10f", fontSize: "50px" }}>
                <i className="fab fa-instagram"></i>
            </a> 
        </div>
       </div>
       </div>
      <div style={{ color: "white", textAlign: "center" }}>
        <a href="https://www.umn.ac.id/" target="_blank" rel="noopener noreferrer">
          <img  src={umn} alt="umn" style= {{ height: "200px", textAlign: "center" }}></img>
        </a>
        <p style={{ fontSize: "30px", textAlign: "center" }}>Universitas Multimedia Nusantara</p>
        <p style={{ fontSize: "25px", textAlign: "center" }}>Informatics Faculty</p>
      </div>
      <div className="row mt-5">
                <div className="mt-5 mb-3 col-sm-12" style={{ textAlign: "center", padding: "5px" }}>
                <h3>Created By</h3>
                <p>&copy; Team C#<br></br>2020</p>
                </div>
        </div>
    </div>
  );
}
