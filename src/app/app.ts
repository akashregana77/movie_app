import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector:'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styles: `
    :host {
      color: rgb(0,0,0);
    }
  `
})

export class App {
  name='akash';
}
