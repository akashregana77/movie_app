import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
