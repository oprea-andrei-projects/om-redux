import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {AppState} from "../store/app.reducer";
import {Store} from "@ngrx/store";
import {selectOrderDto, selectOrderDtoState} from "../store/orderDto/orderDto.selectors";
import {OrderDTO} from "../model/orderDTO";
import {ProductDTO} from "../model/productDTO";
import {setOrderDTOById} from "../store/orderDto/orderDto.actions";
import {Product} from "../model/product";
import {Product2} from "../model/product2";
import {Order} from "../model/order";

@Injectable({
  providedIn: 'root'
})
export class ServiceStateService {

  constructor(private store:Store<AppState>) { }


  private orderSubject = new BehaviorSubject<Order>({ammount: 0, id: 0, orderDate: ""})
  private productsSubject = new BehaviorSubject<Product2[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);
  loading$ = this.loadingSubject.asObservable();
  error$ = this.errorSubject.asObservable();

  order$ = this.orderSubject.asObservable();
  products$: Observable<Product2[]> = this.productsSubject.asObservable();

  orderDTO$ = this.store.select(selectOrderDto).pipe(
      map((dtoState: OrderDTO) => dtoState)
  )



  setOrderDto(orderDto:OrderDTO){

    this.store.dispatch(setOrderDTOById({orderDTO:orderDto}))

  }

  setProducts(products:Product2[]){

    this.productsSubject.next(products)
   //this.products$.subscribe(data => console.log('din STATE ', data))
  }

  setOrder(order:Order){

    this.orderSubject.next(order)
   // this.order$.subscribe(data => console.log('stateserviceOrder ', data))


  }


  setLoading(loading:boolean){

    this.loadingSubject.next(loading);
  }

  setError(error: string | null){

    this.errorSubject.next(error);
  }

}
