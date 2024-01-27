import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {OrderDTO} from "../model/orderDTO";
import {ServiceStateService} from "../stateService/service-state.service";
import {ActivatedRoute} from "@angular/router";
import {OrderMngService} from "../services/order-mng.service";


@Component({
  selector: 'app-order-dto',
  templateUrl: './order-dto.component.html',
  styleUrls: ['./order-dto.component.css']
})
export class OrderDtoComponent implements OnInit, OnDestroy{

  dtoNo:number = 0;

  constructor(private stateService:ServiceStateService, private route: ActivatedRoute, private service:OrderMngService) {
  }

  @Input() orderDto: OrderDTO = {
    orderId: 0, products: [], totalPrice: 0, totalWeight: 0
  }

  orderDTO$ = this.stateService.orderDTO$

  ngOnDestroy(): void {


  }

  ngOnInit(): void {

    this.route.params.subscribe(params =>{

      this.dtoNo = parseInt(params['dtoNo'],10);

      if(isNaN(this.dtoNo)){
        console.log("not a valid order number")
      }else {

        this.service.getTheOrderDTO(this.dtoNo);
      }

    })

  }



}
