import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {

  // Le produit à afficher
  @Input() private productReceived: Product;

  // Événement à renvoyer (c'est notre événément "artificiel") : le vote
  @Output() private voted: EventEmitter<number>;

  constructor() {
    // On initialise notre événement
    this.voted = new EventEmitter<number>();
  }

  ngOnInit() {
  }

  /**
   * Émet un événement pour envoyer la note à ProductListComponent
   * @param note La note à envoyer
   */
  private sendNote(note: number): void {
    console.log('Nouveau vote : ' + note);
    this.voted.emit(note);
  }

}
