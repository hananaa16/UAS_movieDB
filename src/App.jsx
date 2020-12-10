import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieUpcoming } from "./components/upcoming/Upcoming";
import { NowPlaying } from "./components/nowplaying/NowPlaying";
import { PopularMovie } from "./components/popular/Popular";
import { MovieDetail } from "./components/detail/MovieDetail";

export function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/nowplaying/NowPlaying" component={ NowPlaying } />
        <Route path="/popular/Popular" component={ PopularMovie } />
        <Route path="/upcoming/Upcoming" component={ MovieUpcoming } />
        <Route path="/movie/:id" component={ MovieDetail } />
      </Switch>
    </main>
  );
}

export default App;