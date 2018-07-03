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

  constructor() {
    // On initialise le tableau de produits avec nos données de test
    this.products = TAB_PRODUCT;
  }

  ngOnInit() {
  }

  /**
   * Envoi du produit courant à ProductShow
   * @param productClicked Le produit qui a été cliqué
   */
  private sendProduct(productClicked: Product): void {
    console.log(productClicked);
    this.productToSend = productClicked;
  }

}
