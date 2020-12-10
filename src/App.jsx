import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { MovieUpcoming } from "./components/upcoming/Upcoming";
import { NowPlaying } from "./components/nowplaying/NowPlaying";
import { PopularMovie } from "./components/popular/Popular";

export function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={ Home } exact />
        <Route path="/nowplaying/NowPlaying" component={ NowPlaying } />
        <Route path="/popular/Popular" component={ PopularMovie } />
        <Route path="/upcoming/Upcoming" component={ MovieUpcoming } />
      </Switch>
    </main>
  );
}

export default App;