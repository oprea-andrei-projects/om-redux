import {OrderDTO} from "../../model/orderDTO";
import {combineReducers, createReducer, on} from "@ngrx/store";
import * as Actions from './orderDto.actions';
import {Product} from "../../model/product";
import {Product2} from "../../model/product2";


export interface OrderDtoState{

  orderDTOs: OrderDTO[];
  orderDTO:OrderDTO;
  product:Product;
  products:Product2[];
}

export const initialOrderDtoState : OrderDtoState ={

  orderDTOs:[],
  orderDTO:{

    orderId:0,
    products:[],
    totalPrice:0,
    totalWeight:0

  },

  products:[],

  product:{

    id: 0, name: "", price: 0, productName: "", quantityProductPrice: 0, weight: 0
  }
}


export const orderDtoReducer = createReducer(

  initialOrderDtoState,

  on(Actions.setAllOrderDtos,(state,{orderDTOs}):OrderDtoState=>(
    {
      ...state,
      orderDTOs:orderDTOs
    })
  ),

  on(Actions.setOrderDTOById,(state,{orderDTO}):OrderDtoState=>
    (

      {
        ...state,
        orderDTO:orderDTO

      }
    )
  ),

  // on(Actions.setProductsDetails,(state, {products})=>(
  //   {
  //     ...state,
  //     products:products
  //   }
  // ))


)
