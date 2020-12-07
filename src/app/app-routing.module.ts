import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieNowPlayingComponent } from './movie-now-playing/movie-now-playing.component';
import { MovieUpcomingComponent } from './movie-upcoming//movie-upcoming.component';
import { MovieRecommendationComponent } from './movie-recommendation/movie-recommendation.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: 'movie-details', component: MovieDetailsComponent },
  { path: 'movie-now-playing', component: MovieNowPlayingComponent },
  { path: 'movie-upcoming', component: MovieUpcomingComponent },
  { path: 'movie-recommendation', component: MovieRecommendationComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
