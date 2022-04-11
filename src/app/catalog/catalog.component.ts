import { Component, OnInit } from '@angular/core';

import { IProduct } from './product.model';
import { ProductRepositoryService } from './product-repository.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  private products: IProduct[] = [];
  public visibleProducts: IProduct[] = [];
  public filter: string = '';

  constructor(private productRepository: ProductRepositoryService) { }

  ngOnInit(): void {
    this.productRepository.getProducts().subscribe((products: IProduct[]) => {
      this.products = products;
      this.filterProducts();
    });
  }

  public setFilter(filter: string) {
    this.filter = filter;
    this.filterProducts();
  }

  private filterProducts() {
    console.log(this.filter, this.products)
    this.visibleProducts = this.filter === ''
      ? this.products
      : this.products.filter(product => product.category === this.filter);;
  }
}
