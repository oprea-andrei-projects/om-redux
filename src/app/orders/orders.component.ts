import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Order} from "../model/order";
import {ActivatedRoute} from "@angular/router";
import {map, switchMap} from "rxjs";
import {OrderMngService} from "../services/order-mng.service";
import {ServiceStateService} from "../stateService/service-state.service";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit, OnDestroy{


  constructor(private route: ActivatedRoute, private service:OrderMngService, public stateService: ServiceStateService) {
  }

  @Input() order: Order = {

    id:0,
    ammount:0,
    orderDate:""

  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {

      this.route.params.pipe(
        map(params => params['id']),
        switchMap(id => this.service.getOrderById(Number(id)))
      ).subscribe(order =>{

       this.order = order
      })


  }

}
