// Les modules d'angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component perso
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductViewShowComponent } from './product-view-show/product-view-show.component';


// Paramétrage des routes
const productRoutes: Routes = [
  { path: 'produits', component: ProductListComponent},
  { path: 'produits/modification', component: ProductUpdateComponent },
  { path: 'produits/:id', component: ProductViewShowComponent }
];

@NgModule({
  // On importe le RouterModule "vide (sans route)" et on lui injecte les routes
  imports: [ RouterModule.forChild(productRoutes) ],
  // On exporte le RouterModule pour rendre les routes disponibles dans toute l'application
  exports: [ RouterModule ]
})
export class ProductRoutingModule { }
