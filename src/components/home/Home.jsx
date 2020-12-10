import React, { useState, useEffect } from "react";
import { fetchMovies, fetchMoviesUpcoming, fetchPopularMovie } from "../../service";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { Nav } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export function Home() {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setPopular(await fetchPopularMovie());
      setUpcoming(await fetchMoviesUpcoming());
    };

    fetchAPI();
  }, []);

  const movies = nowPlaying.slice(0, 5).map((item, index) => {
    return (
      <div style={{ height: 400, width: "100%" }} key={index}>
        <div className="carousel-center">
          <img style={{ height: 500 }} src={item.backPoster} alt={item.title} />
        </div>
        <div
          className="carousel-caption"
          style={{ textAlign: "center", fontSize: 35 }}
        >
          {item.title}
        </div>
      </div>
    );
  });

  const playing = nowPlaying.slice(0,6).map((item, index) => {
    return (
      <div className="col-md-2 col-sm-6" key={index}>
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

  const pop = popular.slice(0,6).map((item, index) => {
    return (
        <div className="col-md-2 col-sm-6" key={index}>
            <div className="card">
                <Link to={`/movie/${item.id}`}>
                <img className="img-fluid" src={item.poster} alt={item.title}></img>
                </Link>
            </div>
            <div className="mt-3">
                <p style={{ fontWeight: "bolder "}}>{item.title}</p>
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

  const up = upcoming.slice(0,6).map((item, index) => {
    return (
      <div className="col-md-2 col-sm-6" key={index}>
      <div className="card">
        <Link to={`/movie/${item.id}`}>
          <img className="img-fluid" src={item.poster} alt={item.title}></img>
        </Link>
      </div>
      <div className="mt-3">
        <p style={{ fontWeight: "bolder" }}>{item.title}</p>
        <p>{item.date}</p>
      </div>
    </div>
    )
  })

  return (
    <div className="container">
      <h1 className="mt-3" style={{ textAlign: "center"}}>Dream On! Cinema</h1><br></br>
      <Nav className="ml-auto justify-content-center" defaultActiveKey="/">
        <Nav.Item className="mynav"><Nav.Link href="/">Home</Nav.Link></Nav.Item>
        <Nav.Item className="mynav2"><Nav.Link href="/nowplaying/NowPlaying">Now Playing</Nav.Link></Nav.Item>
        <Nav.Item className="mynav2"><Nav.Link href="/popular/Popular">Popular</Nav.Link></Nav.Item>
        <Nav.Item className="mynav2"><Nav.Link href="/upcoming/Upcoming">Upcoming</Nav.Link></Nav.Item>
      </Nav><br></br>
      <div className="col">
        <RBCarousel
          autoplay={true}
          pauseOnVisibility={true}
          slidesshowSpeed={5000}
          version={4}
          indicators={false}
        >
          {movies}
        </RBCarousel>
      </div>
      <div className="row mt-2">
        <h4 className="mt-3">Now Playing</h4>
        <div className="row mt-3">
          {playing}
        </div>
      </div>
      <div className="row mt-2">
        <h4 className="mt-3">Popular</h4>
        <div className="row mt-3">
          {pop}
        </div>
      </div>
      <div className="row mt-2">
        <h4 className="mt-4">Upcoming</h4>
        <div className="row mt-3">
          {up}
        </div>
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
