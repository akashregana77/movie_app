import { Component } from '@angular/core';

import { Home } from './home/home';


@Component({
  selector:'app-root',
  standalone: true,
  imports: [Home],
  templateUrl:'./app.html',
  styles: `
    :host {
      color: rgb(0,0,0);
    }
  `
})

export class App {
  name='akash';
}
