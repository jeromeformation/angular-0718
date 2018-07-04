import { Component, OnInit } from '@angular/core';
import { TAB_PRODUCT, Product } from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Le tableau de produits
  private products: Product[];
  // Le produit à envoyer
  private productToSend: Product;

  // L'ensemble des notes
  private notes: number[];
  // Le moyenne calculée
  private average: number;

  constructor() {
    // On initialise le tableau de produits avec nos données de test
    this.products = TAB_PRODUCT;
    this.notes = [];
    this.average = 0;
    console.log('Appel du constructeur');
  }

  ngOnInit() {
    console.log('Appel de ngOnInit');
  }

  /**
   * Envoi du produit courant à ProductShow
   * @param productClicked Le produit qui a été cliqué
   */
  private sendProduct(productClicked: Product): void {
    console.log(productClicked);
    this.productToSend = productClicked;
  }

  /**
   * Calcule la moyenne des notes reçues
   * @param note Note renvoyée depuis le détail
   */
  private calculateAverage(note: string): void {
    const newNote: number = parseInt(note, 10);

    console.log('Nouveau vote enregistré : ' + note);
    // On ajoute la note au tableau
    this.notes.push(newNote);

    // On calcule la moyenne
    let somme = 0;
    this.notes.forEach(elem => somme += elem);
    this.average = somme / this.notes.length;
  }

}
