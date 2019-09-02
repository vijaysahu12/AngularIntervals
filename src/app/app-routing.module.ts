import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartOneComponent } from './components/cart-one/cart-one.component';
import { CartTwoComponent } from './components/cart-two/cart-two.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: CartOneComponent },
  { path: 'cartOne', component: CartOneComponent },
  { path: 'cartTwo', component: CartTwoComponent },
  { path: 'productList', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
