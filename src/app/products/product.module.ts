import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { ProductViewShowComponent } from './product-view-show/product-view-show.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductUpdateComponent,
    ProductShowComponent,
    ProductViewShowComponent
  ]
})
export class ProductModule { }
