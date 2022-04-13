import { Component, OnInit } from '@angular/core';
import { CartRepositoryService } from './cart-repository.service';

@Component({
  selector: 'bot-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private cartRepository: CartRepositoryService) { }

  get cartItems() { return this.cartRepository.cart; }

  get cartTotal() { return this.cartRepository.cart.reduce((prev, next) => prev + next.price, 0) }

}
