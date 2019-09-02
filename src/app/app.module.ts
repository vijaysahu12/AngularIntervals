import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartOneComponent } from './components/cart-one/cart-one.component';
import { DatePipe, UpperCasePipe } from '@angular/common';
import { CartTwoComponent } from './components/cart-two/cart-two.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { LastCharUperCasePipe } from './pipes/last-char-uper-case.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CartOneComponent,
    CartTwoComponent,
    MenuBarComponent,
    LastCharUperCasePipe,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatePipe , UpperCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
