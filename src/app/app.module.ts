import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieNowPlayingComponent } from './movie-now-playing/movie-now-playing.component';
import { MovieRecommendationComponent } from './movie-recommendation/movie-recommendation.component';
import { MovieUpcomingComponent } from './movie-upcoming/movie-upcoming.component';
import { MoviePopularComponent } from './movie-popular/movie-popular.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    MovieDetailsComponent,
    MovieNowPlayingComponent,
    MovieRecommendationComponent,
    MovieUpcomingComponent,
    MoviePopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
