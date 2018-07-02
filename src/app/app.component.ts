import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // Changer la portée du CSS en global
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title: string ;

  presentation: string;

  constructor() {
    this.title = 'mon application';
    this.presentation = 'Ceci est un site de démonstration d\'Angular en version 6';
  }
}
