import { TestBed } from '@angular/core/testing';

import { OrderMngService } from './order-mng.service';

describe('OrderMngService', () => {
  let service: OrderMngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderMngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
