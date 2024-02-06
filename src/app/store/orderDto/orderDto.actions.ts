import {createAction, props} from "@ngrx/store";
import {OrderDTO} from "../../model/orderDTO";
import {Order} from "../../model/order";
import {Product} from "../../model/product";
import {Product2} from "../../model/product2";


const GET_ALL_ORDERSDTOS = 'GET_ALL_ORDERSDTOS';
const GET_ORDERDTO_BY_ID = 'GET_ORDERDTO_BY_ID';
const GET_PRODUCTS_DETAILS = 'GET_PRODUCTS_DETAILS';
const SET_ORDERDTO_SUCCESS = 'SET_ORDERDTO_SUCCESS';
const SET_ORDERDTO_FAILURE = 'SET_ORDERDTO_FAILURE';
const GET_ORDERDTO_BY_ID2 = 'GET_ORDERDTO_BY_ID2';


export const setAllOrderDtos = createAction(

  GET_ALL_ORDERSDTOS,
  props<{orderDTOs: OrderDTO[]}>()
)

export const setOrderDTOById = createAction(
  GET_ORDERDTO_BY_ID,
  props<{orderDTO:OrderDTO}>()

)

export const setOrderDTOById2 = createAction(
  GET_ORDERDTO_BY_ID2,
  props<{id:string}>()
)


export const setOrderDTOSuccess = createAction(
  SET_ORDERDTO_SUCCESS,
  props<{message: string}>()
)

export const setOrderDTOFailure = createAction(
  SET_ORDERDTO_FAILURE,
  props<{error: Error}>
)


