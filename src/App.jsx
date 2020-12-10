import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieUpcoming } from "./components/upcoming/Upcoming";
import { NowPlaying } from "./components/nowplaying/NowPlaying";
import { MovieDetail } from "./components/moviedetail/MovieDetail";

export function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/nowplaying/NowPlaying" component={ NowPlaying } />
        <Route path="/upcoming/Upcoming" component={ MovieUpcoming } />
        <Route path="/movie/:id" component={MovieDetail} />
      </Switch>
    </main>
  );
}

export default App;
