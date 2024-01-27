import * as fromOrderDto from './orderDto/orderDto.reducer';
import {ActionReducerMap} from "@ngrx/store";

export interface AppState{
    orderDTO: fromOrderDto.OrderDtoState
}

export const appReducer: ActionReducerMap<AppState> = {
    orderDTO: fromOrderDto.orderDtoReducer
}
