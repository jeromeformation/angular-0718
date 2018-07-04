import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductUpdateComponent } from './products/product-update/product-update.component';

/* Gestion de l'internationalisation */
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { ProductShowComponent } from './products/product-show/product-show.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './root/home/home.component';
import { ProductViewShowComponent } from './products/product-view-show/product-view-show.component';
import { Error404Component } from './error/error404/error404.component';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
/* Fin de gestion de l'internationalisation */

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductShowComponent,
    HomeComponent,
    ProductViewShowComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
