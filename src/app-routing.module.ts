import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartOneComponent } from './components/cart-one/cart-one.component';
import { CartTwoComponent } from './components/cart-two/cart-two.component';

const routes: Routes = [
  { path: '', component: CartOneComponent },
  { path: 'cartOne', component: CartOneComponent },
  { path: 'cartTwo', component: CartTwoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
