import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDtoEffectsComponent } from './order-dto-effects.component';

describe('OrderDtoEffectsComponent', () => {
  let component: OrderDtoEffectsComponent;
  let fixture: ComponentFixture<OrderDtoEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDtoEffectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDtoEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
