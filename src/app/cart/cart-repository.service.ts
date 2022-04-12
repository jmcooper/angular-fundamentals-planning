import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

import { IProduct } from '../catalog/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartRepositoryService {

  public cart: IProduct[] = [];

  constructor(private http: HttpClient) { }

  getCart(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('/api/cart')
      .pipe(map((cart) => { this.cart = cart; return this.cart; }));
  }

  saveCart(cart: IProduct[]) {
    this.http.post('/api/cart', cart)
      .subscribe({
        next: () => {
          this.cart = cart;
          console.log('saved');
        }
      });
  }
}
