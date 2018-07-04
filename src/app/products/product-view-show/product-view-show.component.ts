import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TAB_PRODUCT, Product } from '../../model/product';

@Component({
  selector: 'app-product-view-show',
  templateUrl: '../product-show/product-show.component.html',
  styleUrls: ['../product-show/product-show.component.css']
})
export class ProductViewShowComponent implements OnInit, DoCheck {

  // Produit à afficher
  private productReceived: Product;

  constructor(private routeActive: ActivatedRoute, private router: Router) {
    // Récupération de l'id de l'URL
    const idProduct: number = +this.routeActive.snapshot.paramMap.get('id');
    console.log('L\'id du produit est : ' + idProduct);

    this.getProduct(idProduct);
  }

  ngOnInit() {
  }

  /**
   * On détecte le changement d'URL : si l'id de l'URL change => on change le produit à afficher
   */
  ngDoCheck(): void {
    // On vérifie qu'on a bien un produit initialisé
    if (this.productReceived) {
      // On vérifie que l'id a changé
      // Récupération de l'id de l'URL
      const idProduct: number = +this.routeActive.snapshot.paramMap.get('id');
      if (idProduct !== this.productReceived.getId()) {
        // si l'URL a changé => on change le produit
        this.getProduct(idProduct);
      }
    }
  }

  /**
   * Initialise ou met à jour le produit par rapport à l'id de l'URL
   * @param id L'id récupéré de l'URL
   */
  private getProduct(idProduct: number): void {
    // On vérifie que l'id est bien un nombre positif
    // ... => sinon on redirige vers l'erreur 404
    if (isNaN(idProduct) || idProduct <= 0) {
      // On redirige vers l'erreur 404
      this.router.navigate(['/not-found']);
    }

    // Récupération du tableau de produits (données de test)
    const tabProduct: Product[] = TAB_PRODUCT;

    // Filtre du tableau : obtention du produit voulu
    const tabNew = tabProduct.filter(
      (currentProduct: Product) => (currentProduct.getId() === idProduct)
    );
    console.log(tabNew);

    if (tabNew.length !== 1) {
      // On redirige vers l'erreur 404
      this.router.navigate(['/not-found']);
    }

    this.productReceived = tabNew[0];
  }
}
