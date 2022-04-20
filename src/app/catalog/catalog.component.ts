import { Component, OnInit } from '@angular/core';

import { IProduct } from './product.model';
import { ProductRepositoryService } from './product-repository.service';
import { CartRepositoryService } from '../cart/cart-repository.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
})
export class CatalogComponent implements OnInit {
  public visibleProducts: IProduct[] = [];
  public filter: string = '';
  private products: IProduct[] = [];
  private cart: IProduct[] = [];

  constructor(
    private productRepository: ProductRepositoryService,
    private cartRepository: CartRepositoryService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let filter: string;

    this.products = this.route.snapshot.data['products'];

    this.cartRepository.getCart().subscribe({
      next: (cart) => (this.cart = cart),
    });

    this.route.queryParams.subscribe((params) => {
      filter = params['filter'] ?? '';
      this.setFilter(filter);
    });
  }

  setFilter(filter: string) {
    this.filter = filter;
    this.filterProducts();
  }

  private filterProducts() {
    this.visibleProducts =
      this.filter === ''
        ? this.products
        : this.products.filter((product) => product.category === this.filter);
  }

  addToCart(product: IProduct) {
    let newCart = [...this.cart, product];

    this.cartRepository.saveCart(newCart);
  }
}
