import {createFeatureSelector, createSelector} from "@ngrx/store";
import {OrderDtoState} from "./orderDto.reducer";


export const selectOrderDtoState = createFeatureSelector<OrderDtoState>('orderDTO')


export const selectOrderDto = createSelector(
  selectOrderDtoState,
  (state) => state.orderDTO
);

// export const selectProducts = createSelector(
//   selectOrderDtoState,
//   (state) => state.products
// )
