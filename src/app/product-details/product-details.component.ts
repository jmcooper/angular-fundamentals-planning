import { Component, Input, OnInit } from '@angular/core';
import { CartRepositoryService } from '../cart/cart-repository.service';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() allowPurchase: boolean = false;

  constructor(private cartRepository: CartRepositoryService) { }

  ngOnInit(): void {
  }

  addToCart(product: IProduct) {
    let cart = [...this.cartRepository.cart, product];

    this.cartRepository.saveCart(cart);
  }



}
