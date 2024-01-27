import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {Product2} from "../model/product2";
import {OrderMngService} from "../services/order-mng.service";
import {ProductDTO} from "../model/productDTO";
import {ServiceStateService} from "../stateService/service-state.service";
import {Store} from "@ngrx/store";
import {AppState} from "../store/app.reducer";
import {selectOrderDto} from "../store/orderDto/orderDto.selectors";
import {map} from "rxjs";

@Component({
  selector: '.products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.css']
})
export class Products2Component implements OnInit{

  prodDto: ProductDTO = {
    productNames: [],
  };
  constructor(private service:OrderMngService, public stateService: ServiceStateService, private store:Store<AppState>) {
  }

  @Input() product: Product2 = {
    id: 0, name: "", price: 0, weight: 0

  }
  ngOnInit(): void {

    this.store.select(selectOrderDto).pipe(
      map(orderDto=>orderDto.products.map(prod=>prod.productName))
    ).subscribe(data=>
        this.prodDto.productNames = data
    )

    this.service.getProductDetails(this.prodDto).subscribe((data) => {
      console.log('Data from service:', data);
    });

  }

}
