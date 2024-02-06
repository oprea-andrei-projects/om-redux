import {Component, Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from "@ngrx/effects";
import * as OrderDtoActions from '../store/orderDto/orderDto.actions';
import {OrderMngService} from "../services/order-mng.service";
import {catchError, finalize, map, mergeMap} from 'rxjs/operators';
import {of, tap} from 'rxjs';
import {ServiceStateService} from "../stateService/service-state.service";


@Component({
  selector: 'app-order-dto-effects',
  templateUrl: './order-dto-effects.component.html',
  styleUrls: ['./order-dto-effects.component.css']
})


@Injectable()
export class OrderDtoEffectsComponent {

  constructor(private actions$:Actions, private service: OrderMngService, private stateService: ServiceStateService) {
  }

  // loadOrderDto$ = createEffect(() => this.actions$.pipe(
  //   tap(data => console.log('din effects ', data)),
  //   ofType(OrderDtoActions.setOrderDTOById),
  //   mergeMap(action => this.service.getOrderById(action.orderDTO.orderId)
  //   )
  // ));


  loadOrderDTO$ = createEffect(() => this.actions$.pipe(

      ofType(OrderDtoActions.setOrderDTOById2),
      tap(() =>this.stateService.setLoading(true)),
      mergeMap(action =>
          this.service.getTheOrderDTO(Number(action.id)).pipe(
              tap(data=>this.stateService.setOrderDto(data)),
              map(() => OrderDtoActions.setOrderDTOSuccess({message:"wbduwd"})),
              catchError(error  =>
              {
                this.stateService.setError(error);
                this.stateService.setLoading(false);

                // @ts-ignore
                return of(OrderDtoActions.setOrderDTOFailure({error}))
              }
              )
          )

      ),

    finalize(()=> this.stateService.setLoading(false))

  ));




}
