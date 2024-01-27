import {Component, Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from "@ngrx/effects";
import * as OrderDtoActions from '../store/orderDto/orderDto.actions';
import {OrderMngService} from "../services/order-mng.service";
import { catchError, map, mergeMap } from 'rxjs/operators';
import {of, tap} from 'rxjs';

@Component({
  selector: 'app-order-dto-effects',
  templateUrl: './order-dto-effects.component.html',
  styleUrls: ['./order-dto-effects.component.css']
})


@Injectable()
export class OrderDtoEffectsComponent {

  constructor(private actions$:Actions, private service: OrderMngService) {
  }

  loadOrderDto$ = createEffect(() => this.actions$.pipe(
    tap(data => console.log('din effects ', data)),
    ofType(OrderDtoActions.setOrderDTOById),
    mergeMap(action => this.service.getOrderById(action.orderDTO.orderId)
    )
  ));



}
