import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<any> {
  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productService.getProducts();
  }
}
