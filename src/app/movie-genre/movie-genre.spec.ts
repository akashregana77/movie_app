import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieGenre } from './movie-genre';

describe('MovieGenre', () => {
  let component: MovieGenre;
  let fixture: ComponentFixture<MovieGenre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieGenre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieGenre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
