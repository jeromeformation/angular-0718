import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  // Le produit à afficher
  @Input() private productReceived: Product;

  constructor() { }

  ngOnInit() {
  }

}
