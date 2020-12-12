import React, { useState, useEffect } from "react";
import {
  fetchMovieDetail,
  fetchMovieVideos,
  fetchCasts,
  fetchSimilarMovie,
} from "../../service";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Modal } from "react-bootstrap";
import ReactPlayer from "react-player";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import moment from 'moment';

export function MovieDetail({ match }) {
  let params = match.params;
  let genres = [];
  const [isOpen, setIsOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const [video, setVideo] = useState([]);
  const [casts, setCasts] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDetail(await fetchMovieDetail(params.id));
      setVideo(await fetchMovieVideos(params.id));
      setCasts(await fetchCasts(params.id));
      setSimilarMovie(await fetchSimilarMovie(params.id));
    };

    fetchAPI();
    window.scrollTo(0,0);
  }, [params.id]);

  genres = detail.genres;

  const MoviePlayerModal = (props) => {
    const youtubeUrl = "https://www.youtube.com/watch?v=";
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            style={{ color: "#000000", fontWeight: "bolder" }}
          >
            {detail.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#000000" }}>
          <ReactPlayer
            className="container-fluid"
            url={youtubeUrl + video.key}
            playing
            width="100%"
          ></ReactPlayer>
        </Modal.Body>
      </Modal>
    );
  };

  let genresList;
  if (genres) {
    genresList = genres.map((g, i) => {
      return (
        <li className="list-inline-item" key={i}>
          <p style={{ color: "white", border: "1px solid", padding: "10px", borderRadius: "20px"}}>
            {g.name}
          </p>
        </li>
      );
    });
  }

  const castList = casts.slice(0, 6).map((c, i) => {
    return (
      <div className="col-sm-2 text-center" key={i}>
        <img
          className="img-fluid mx-auto d-block"
          src={c.img}
          alt={c.name}
           style={{borderRadius:"2em"}}
        ></img>
        <p className="font-weight-bold text-center">{c.name}</p>
        <p
          className="font-weight-light text-center"
         style={{ color: "F0ED4C" }}
        >
          {c.character}
        </p>
      </div>
    );
  });

  const similarMovieList = similarMovie.slice(0, 4).map((item, index) => {
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
    <div>
      <Navbar className="col-lg-12 color-nav" sticky="top">
        <Navbar.Brand href="/">Dream On! Cinema</Navbar.Brand>
        <Nav className="mr-auto justify-content-center" defaultActiveKey="">
          <Nav.Item className="mynav2 ml-3 col-nav"><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item className="mynav2 ml-3"><Nav.Link href="/nowplaying/NowPlaying">Now Playing</Nav.Link></Nav.Item>
          <Nav.Item className="mynav2 ml-3"><Nav.Link href="/popular/Popular">Popular</Nav.Link></Nav.Item>
          <Nav.Item className="mynav2 ml-3"><Nav.Link href="/upcoming/Upcoming">Upcoming</Nav.Link></Nav.Item>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Item className="mynav2 mr-sm-2"><Nav.Link href="/aboutUs/AboutUs">About Us</Nav.Link></Nav.Item>
        </Nav>
      </Navbar><br></br>
      <div className="container">
      <div className="row mt-2">
        <MoviePlayerModal
          show={isOpen}
          onHide={() => {
            setIsOpen(false);
          }}
        ></MoviePlayerModal>
        <div className="col text-center" style={{ width: "100%" }}>
          <h1>{detail.title}</h1>
          <img
            className="img-fluid"
            src={`http://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
            alt={detail.title} style={{height:"400px"}}
          ></img>
          <div className="carousel-center">
            <i
              onClick={() => setIsOpen(true)}
              className="far fa-play-circle"
              style={{ fontSize: 95, color: "white", cursor: "pointer" }}
            ></i>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <p style={{ color: "#43E6D5", fontWeight: "bolder" }}>GENRE</p>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col">
          <ul className="list-inline">{genresList}</ul>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <p style={{ color: "yellow", fontWeight: "bolder" }}>RATING</p>
          <div className="text-center">
            <ReactStars
              count={detail.vote_average}
              size={20}
              color1={"#f4c10f"}
            ></ReactStars>
          </div>
        </div>
        <div className="row mt-3">
            <p style={{ color: "white", fontWeight: "bolder" }}>OVERVIEW</p>
            {detail.overview}
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-4">
          <p style={{ color: "#43E6D5", fontWeight: "bolder" }}>RELEASE DATE</p>
          <p style={{ color: "#F79A9C" }}>{moment(detail.release_date).format("DD MMMM YYYY")}</p>
        </div>
        <div className="col-md-4">
          <p style={{ color: "#43E6D5", fontWeight: "bolder" }}>RUN TIME</p>
          <p style={{ color: "#F79A9C" }}>{detail.runtime}</p>
        </div>
        <div className="col-md-4">
          <p style={{ color: "#43E6D5", fontWeight: "bolder" }}>HOMEPAGE</p>
          <p style={{ color: "#F79A9C" }}>{detail.homepage}</p>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col">
          <p style={{ color: "white", fontWeight: "bolder" }}>CASTS</p>
        </div>
      </div>
      <div className="row mt-3">{castList}</div>

      <div className="row mt-3">
        <div className="col">
          <p style={{ color: "white", fontWeight: "bolder", fontSize: "30px" }}>
            RECOMMENDED MOVIES
          </p>
        </div>
      </div>

      <div className="row mt-3">{similarMovieList}</div>

      <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
       <div className="row mt-2">
                <div className="mt-5 mb-3 col-sm-12" style={{ textAlign: "center", padding: "5px" }}>
                <h3>Created By</h3>
                <p>&copy; Team C#<br></br>2020</p>
                </div>
            </div>
       </div>
    </div>
  );
}
