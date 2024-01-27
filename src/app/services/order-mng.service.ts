import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {BehaviorSubject, catchError, Observable, of, tap} from "rxjs";
import {Product} from "../model/product";
import {OrderDTO} from "../model/orderDTO";

import {Order} from "../model/order";
import {OrderDet} from "../model/orderDet";
import {OrderDtoState} from "../store/orderDto/orderDto.reducer";
import {ServiceStateService} from "../stateService/service-state.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {ProductDTO} from "../model/productDTO";
import { Product2 } from '../model/product2';

@Injectable({
  providedIn: 'root'
})
export class OrderMngService {

  private server = environment.apiUrl + "api/v1/ordersManagement";

  constructor(private http:HttpClient, private oDtoState:ServiceStateService) {

  }

  // getTheOrderDTO(orderNmber:number){
  //
  //   return this.http.get<OrderDTO>(`${this.server}/detailsByOrderNumber/${orderNmber}`).pipe(
  //     catchError(this.handleError)
  //   ).subscribe(
  //
  //     {
  //       next:(orderDTO) =>{
  //         console.log('from service', orderDTO)//aici e ok
  //         this.oDtoState.setOrderDto(orderDTO)
  //         this.oDtoState.setLoading(false)
  //
  //       },
  //       error:(error) =>{
  //
  //           this.oDtoState.setError(error)
  //           this.oDtoState.setLoading(false)
  //       }
  //     }
  //   )
  // }


  getTheOrderDTO(orderNmber:number){

    return this.http.get<OrderDTO>(`${this.server}/detailsByOrderNumber/${orderNmber}`)
  }















  getProductDetails(prodDto:ProductDTO){

    // @ts-ignore
    return this.http.post(`${this.server}/getProductsByNames`,prodDto).pipe(
      catchError(this.handleError),
      tap((prod) => this.oDtoState.setProducts(prod))
    )

  }











  getOrderById(id:number){
    return this.http.get<Order>(`${this.server}/findOrderById/`+id).pipe(
      catchError(this.handleError),
      tap(order =>this.oDtoState.setOrder(order))
    )
  }

  getAllOrderDetails(){
    return this.http.get(`${this.server}/allOrderDetails`).pipe(
      catchError(this.handleError),


    )
  }




  private handleError(error: HttpErrorResponse): Observable<any> {
    console.error(error);

    let errorMessage: string;

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client Error - ${error.error.message}`;
    } else {
      if (error.error && error.error.reason) {
        errorMessage = `${error.error.reason} - Error code ${error.status}`;
      } else {
        errorMessage = `An error occurred - Error code ${error.status}`;
      }
    }

    return of(errorMessage);
  }


}
