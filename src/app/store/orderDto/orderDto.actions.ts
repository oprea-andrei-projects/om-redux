import {createAction, props} from "@ngrx/store";
import {OrderDTO} from "../../model/orderDTO";
import {Order} from "../../model/order";
import {Product} from "../../model/product";
import {Product2} from "../../model/product2";


const GET_ALL_ORDERSDTOS = 'GET_ALL_ORDERSDTOS';
const GET_ORDERDTO_BY_ID = 'GET_ORDERDTO_BY_ID';
const GET_PRODUCTS_DETAILS = 'GET_PRODUCTS_DETAILS';


export const setAllOrderDtos = createAction(

  GET_ALL_ORDERSDTOS,
  props<{orderDTOs: OrderDTO[]}>()
)

export const setOrderDTOById = createAction(
  GET_ORDERDTO_BY_ID,
  props<{orderDTO:OrderDTO}>()

)

// export const setProductsDetails = createAction(
//   GET_PRODUCTS_DETAILS,
//   props<{ products: Product2[] }>()
// );


