import {Component, OnInit} from '@angular/core';
import {OrderMngService} from "../services/order-mng.service";
import {ProductDTO} from "../model/productDTO";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service:OrderMngService) {



  }

  ngOnInit(): void {

  }

}
