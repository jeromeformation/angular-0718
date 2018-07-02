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
  url: string;
  isEditable: boolean;

  constructor() {
    this.title = 'mon application';
    this.presentation = 'Ceci est un site de démonstration d\'Angular en version 6';
    this.url = 'https://www.ecosia.org/';
    this.isEditable = false;
  }

  /**
   * Change la valeur du booléen "isEditable"
   */
  private changeIsEditable(): void {
    this.isEditable = !this.isEditable;
  }
}
