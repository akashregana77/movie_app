import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-movie-genre',
  standalone: true,
  imports: [Navbar],
  templateUrl: './movie-genre.html',
  styleUrl: './movie-genre.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MovieGenre {

}
