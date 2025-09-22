import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyOrdersComponent } from './my-orders.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from 'src/app/service/books/book.service';
import { of } from 'rxjs';

describe('MyOrdersComponent', () => {
  let component: MyOrdersComponent;
  let fixture: ComponentFixture<MyOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MyOrdersComponent, RouterTestingModule, HttpClientTestingModule],
      providers: [
        {
          provide: BookService,
          useValue: {
            books$: of([]),
            getBook: jasmine.createSpy('getBook'),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(MyOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});