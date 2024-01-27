import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {OrderMngService} from "./services/order-mng.service";
import {ServiceStateService} from "./stateService/service-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'om-redux';
  public dtoNo!: number;


  constructor(private router:Router, private service:OrderMngService, private stateService: ServiceStateService) {

      console.log('app component')

  }

  goToDash(){
    this.router.navigate(['']);

  }
  goToOrders(){

    if (this.dtoNo) {

      this.router.navigate(['orders', this.dtoNo]);
    } else {

      console.error('Please enter a valid dtoNo before searching.');
    }

  }


  goToProd(){

    this.router.navigate(['products'])
  }

  goToOrderDto(){

    if (this.dtoNo) {

      this.router.navigate(['orderDto', this.dtoNo]);


    } else {

      console.error('Please enter a valid dtoNo before searching.');
    }
  }

}
