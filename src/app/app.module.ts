import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/* Gestion de l'internationalisation */
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './root/home/home.component';
import { Error404Component } from './error/error404/error404.component';
import { ProductModule } from './products/product.module';

registerLocaleData(localeFr, 'fr-FR', localeFrExtra);
/* Fin de gestion de l'internationalisation */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
