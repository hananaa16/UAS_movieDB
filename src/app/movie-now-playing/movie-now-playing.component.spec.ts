import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNowPlayingComponent } from './movie-now-playing.component';

describe('MovieNowPlayingComponent', () => {
  let component: MovieNowPlayingComponent;
  let fixture: ComponentFixture<MovieNowPlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieNowPlayingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
