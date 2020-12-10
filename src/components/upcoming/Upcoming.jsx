import React, { useState, useEffect } from 'react';
import { fetchMoviesUpcoming } from "../../service";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

export function MovieUpcoming() {
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setUpcoming(await fetchMoviesUpcoming());
        };

        fetchAPI();
    }, []);

    const movies = upcoming.slice(0,20).map((item, index) => {
        return (
            <div className="col-md-3 col-sm-6" key={index}>
                <div className="card">
                    <Link to={`/movie/${item.id}`}>
                    <img className="img-fluid" src={item.poster} alt={item.title}></img>
                    </Link>
                </div>
                <div className="mt-3">
                    <p style={{ fontWeight: "bolder "}}>{item.title}</p>
                    <p>{item.date}</p>
                </div>
            </div>
        );
    });

    return (
        <div className="container">
            <h1 className="mt-3" style={{ textAlign: "center" }}>Dream On! Cinema</h1><br></br>
            <Nav className="ml-auto justify-content-center" defaultActiveKey="/upcoming/Upcoming">
                <Nav.Item className="mynav2"><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item className="mynav2"><Nav.Link href="/nowplaying/NowPlaying">Now Playing</Nav.Link></Nav.Item>
                <Nav.Item className="mynav"><Nav.Link href="/upcoming/Upcoming">Upcoming</Nav.Link></Nav.Item>
            </Nav><br></br>
            <h2 style={{ textAlign: "center" }}>Upcoming</h2>
            <div className="row mt-2">
                <div className="row mt-3">{movies}</div>
            </div>
        </div>
    );
}