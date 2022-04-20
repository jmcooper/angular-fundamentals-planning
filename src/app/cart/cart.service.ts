import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, of, BehaviorSubject } from 'rxjs';

import { IProduct } from '../catalog/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: BehaviorSubject<IProduct[]>;

  constructor(private http: HttpClient) {
    this.cart = new BehaviorSubject<IProduct[]>([]);
    this.http.get<IProduct[]>('/api/cart').subscribe({
      next: (cart) => this.cart.next(cart),
    });
  }

  getCart(): Observable<IProduct[]> {
    return this.cart;
  }

  saveCart(cart: IProduct[]) {
    this.http.post('/api/cart', cart).subscribe({
      next: () => {
        this.cart.next(cart);
      },
    });
  }
}
