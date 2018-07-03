import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // Changer la portée du CSS en global
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  private title: string ;
  private presentation: string;
  private url: string;
  private isEditable: boolean;
  private objClassesCSS: object;
  // Pour le switch
  private meteo: string;

  constructor() {
    this.title = 'mon application';
    this.presentation = 'Ceci est un site de démonstration d\'Angular en version 6';
    this.url = 'https://www.ecosia.org/';
    this.isEditable = false;
    // Définition de l'objet utilisé par ngClass
    this.changeObjClassesCSS();
    // On initialise la météo (pour le switch)
    this.meteo = 'pluvieux';
  }

  /**
   * Change la valeur du booléen "isEditable"
   */
  private changeIsEditable(): void {
    this.isEditable = !this.isEditable;
    this.changeObjClassesCSS();
  }

  /**
   * Initialisation/Met à jour l'object objClassesCSS servant au ngClass
   */
  private changeObjClassesCSS(): void {
    this.objClassesCSS = {
      'teal-text' : this.isEditable,
      'teal'      : !this.isEditable
    };
  }
}
