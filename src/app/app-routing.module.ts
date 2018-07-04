// Les modules d'angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Nos components perso
import { ProductListComponent } from './products/product-list/product-list.component';
import { HomeComponent } from './root/home/home.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import { ProductViewShowComponent } from './products/product-view-show/product-view-show.component';
import { Error404Component } from './error/error404/error404.component';

// Paramétrage des routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'produits', component: ProductListComponent},
  { path: 'produits/modification', component: ProductUpdateComponent },
  { path: 'produits/:id', component: ProductViewShowComponent },
  { path: 'not-found', component: Error404Component },
  { path: '**', component: Error404Component }
];

@NgModule({
  // On importe le RouterModule "vide (sans route)" et on lui injecte les routes
  imports: [ RouterModule.forRoot(appRoutes) ],
  // On exporte le RouterModule pour rendre les routes disponibles dans toute l'application
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
