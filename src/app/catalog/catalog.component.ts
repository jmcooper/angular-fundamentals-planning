import { Component, OnInit } from '@angular/core';

import { IProduct } from './product.model';
import { ProductRepositoryService } from './product-repository.service';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public products: IProduct[] = [];

  constructor(private productRepository: ProductRepositoryService) { }

  ngOnInit(): void {
    this.productRepository.getProducts().subscribe(
      (products: IProduct[]) => this.products = products
    );
  }

}
