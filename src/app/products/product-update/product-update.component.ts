import { Component, OnInit } from '@angular/core';
import { Product, PRODUCT_TEST } from '../../model/product';



@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  // Produit à modifier
  private product: Product;

  constructor() {
    this.product = PRODUCT_TEST;
    console.log(this.product);
  }

  ngOnInit() {
  }

}
