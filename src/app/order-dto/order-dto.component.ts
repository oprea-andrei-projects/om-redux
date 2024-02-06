import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {OrderDTO} from "../model/orderDTO";
import {ServiceStateService} from "../stateService/service-state.service";
import {ActivatedRoute} from "@angular/router";
import {OrderMngService} from "../services/order-mng.service";
import {map, switchMap, tap} from "rxjs";
import {AppState} from "../store/app.reducer";
import {Store} from "@ngrx/store";
import {setOrderDTOById, setOrderDTOById2} from "../store/orderDto/orderDto.actions";
import {OrderDtoEffectsComponent} from "../order-dto-effects/order-dto-effects.component";


@Component({
  selector: 'app-order-dto',
  templateUrl: './order-dto.component.html',
  styleUrls: ['./order-dto.component.css']
})
export class OrderDtoComponent implements OnInit, OnDestroy{

  dtoNo:number = 0;

  constructor(private effectsComponent: OrderDtoEffectsComponent,private stateService:ServiceStateService, private route: ActivatedRoute, private service:OrderMngService, private store:Store<AppState>) {


  }

  // @Input() orderDto: OrderDTO = {
  //   orderId: 0, products: [], totalPrice: 0, totalWeight: 0
  // }

  orderDTO$ = this.stateService.orderDTO$

  ngOnDestroy(): void {


  }

  ngOnInit(): void {


    // this.route.params.pipe(
    //   tap(data => console.log('din component dto ',data)),
    //   map(params => params['dtoNo']),
    //   switchMap(id=>this.service.getTheOrderDTO(Number(id))))
    //   .subscribe(orderDTO=>{
    //     this.store.dispatch(setOrderDTOById({orderDTO:orderDTO}));
    //   });

    this.route.params.pipe(
      tap(data => console.log('din component dto ',data)),
      map(params => params['dtoNo'])
    ).subscribe(data => this.store.dispatch(setOrderDTOById2({id:data})))
    this.stateService.orderDTO$.subscribe(orderDTO =>
      console.log('orderDTO$ ', orderDTO)
    )




  }



}
