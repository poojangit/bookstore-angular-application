import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { CartService } from 'src/app/service/cart/cart.service';
import { of } from 'rxjs';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CartComponent, RouterTestingModule, MatDialogModule, HttpClientTestingModule],
      providers: [
        FormBuilder,
        {
          provide: CartService,
          useValue: {
            cartList$: of([]),
            getAllCartItems: jasmine.createSpy('getAllCartItems'),
            deleteCartItem: jasmine.createSpy('deleteCartItem').and.returnValue(of({})),
            updateCartItemQuant: jasmine.createSpy('updateCartItemQuant').and.returnValue(of({})),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});