import React, { useState, useEffect } from "react";
import { fetchMovies } from "../../service";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
    };

    fetchAPI();
  }, []);

  const movies = nowPlaying.slice(0,20).map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
      <div className="card">
        <Link to={`/movie/${item.id}`}>
          <img className="img-fluid" src={item.poster} alt={item.title}></img>
        </Link>
      </div>
      <div className="mt-3">
        <p style={{ fontWeight: "bolder" }}>{item.title}</p>
        <p>Rated: {item.rating}</p>
        <ReactStars
          count={item.rating}
          size={20}
          color1={"#f4c10f"}
        ></ReactStars>
      </div>
    </div>
    );
  });

  

  return (
    <div className="container">
      <h1 className="mt-3" style={{ textAlign: "center"}}>Dream On! Cinema</h1><br></br>
      <Nav className="ml-auto justify-content-center" defaultActiveKey="/nowplaying/NowPlaying">
        <Nav.Item className="mynav2"><Nav.Link href="/">Home</Nav.Link></Nav.Item>
        <Nav.Item className="mynav"><Nav.Link href="/nowplaying/NowPlaying">Now Playing</Nav.Link></Nav.Item>
        <Nav.Item className="mynav2"><Nav.Link href="/popular/Popular">Popular</Nav.Link></Nav.Item>
        <Nav.Item className="mynav2"><Nav.Link href="/upcoming/Upcoming">Upcoming</Nav.Link></Nav.Item>
      </Nav><br></br>
      <h2 style={{ textAlign: "center"}}>Now Playing</h2>
      <div className="row mt-2">
      <div className="row mt-3">{movies}</div>
      </div>
       <div className="row mt-5">
                <div className="mt-5 mb-3 col-sm-12" style={{ textAlign: "center", padding: "5px" }}>
                <h3>Created By</h3>
                <p>&copy; Team C#<br></br>2020</p>
                <div className="col-sm-12">
                <Link to="/aboutus/AboutUs">
                    <Button variant="outline-info">About Us</Button>
                </Link>
                </div>
                </div>
            </div>
    </div>
  );
}
