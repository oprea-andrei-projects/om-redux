import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../model/product";
import {ServiceStateService} from "../stateService/service-state.service";


@Component({
  selector: '.products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy{

  @Input() products: Product[] = [];

  @Input() product: Product = {
    id: 0, name: "", price: 0, productName: "", quantityProductPrice: 0, weight: 0

  }

  constructor(private stateService: ServiceStateService) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {

    //this.stateService.porduct$.subscribe(data => console.log(data))

  }

}
