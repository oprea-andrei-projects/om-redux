import {Product} from "./product";

export interface OrderDTO{

  orderId:number,
  products:Product[];
  totalPrice:number,
  totalWeight: number


}
