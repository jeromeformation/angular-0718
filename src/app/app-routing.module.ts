// Les modules d'angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Nos components perso
import { ProductListComponent } from './products/product-list/product-list.component';
import { HomeComponent } from './root/home/home.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';

// Paramétrage des routes
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'produits', component: ProductListComponent},
  { path: 'produits/modification', component: ProductUpdateComponent }
];

@NgModule({
  // On importe le RouterModule "vide (sans route)" et on lui injecte les routes
  imports: [ RouterModule.forRoot(appRoutes) ],
  // On exporte le RouterModule pour rendre les routes disponibles dans toute l'application
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
