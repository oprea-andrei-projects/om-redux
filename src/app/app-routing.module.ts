import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersComponent} from "./orders/orders.component";
import {OrderDtoComponent} from "./order-dto/order-dto.component";
import {HomeComponent} from "./home/home.component";
import {Products2Component} from "./products2/products2.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path:'products', component:Products2Component},
  {path:'orders/:id', component:OrdersComponent},
  {path: 'orderDto/:dtoNo', component: OrderDtoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
