import { Component, OnInit } from '@angular/core';
import { Router }                   from '@angular/router';
import { Observable }               from 'rxjs/Observable';
import { NowPlayingService }            from './now-playing.service';
import { NowPlaying }                    from './now-playing';

@Component({
  selector: 'app-movie-now-playing',
  templateUrl: './movie-now-playing.component.html',
  styleUrls: ['./movie-now-playing.component.css']
})
export class MovieNowPlayingComponent implements OnInit {

  constructor(private nowplayingService: NowPlayingService,
    private router: Router) { }

  ngOnInit(): void {
    this.language = this.nowplayingService.getLanguage();
    this.getMovies();
  }
   getMovies() {
    this.movies = this.nowplayingService.getMovies();
  }
  
  onSelect(nowplaying: NowPlaying) {
    this.router.navigate(['./../now-playing', movie.id]);
  }

}
