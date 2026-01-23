import { Routes } from '@angular/router';
import { Home } from './home/home';
import { MovieGenre } from './movie-genre/movie-genre';
export const routes: Routes = [
    {path: '', component: Home},
    {path: 'genre', component: MovieGenre}
];
