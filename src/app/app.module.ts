import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {OrderDtoComponent} from "./order-dto/order-dto.component";
import {ProductsComponent} from "./products/products.component";
import {OrdersComponent} from "./orders/orders.component";
import {OrderMngService} from "./services/order-mng.service";
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { Products2Component } from './products2/products2.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { OrderDtoEffectsComponent } from './order-dto-effects/order-dto-effects.component';

@NgModule({
  declarations: [
    AppComponent,

    ProductsComponent,
    OrdersComponent,
    OrderDtoComponent,
    HomeComponent,
    Products2Component,
    OrderDtoEffectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument(),
    FormsModule,
    HttpClientModule,
    NgbModule,
    EffectsModule.forRoot([OrderDtoEffectsComponent]),

  ],
  providers: [OrderMngService],
  bootstrap: [AppComponent]
})
export class AppModule { }
