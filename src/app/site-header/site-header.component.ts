import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { IProduct } from '../catalog/product.model';
import { UserService } from '../shared/user.service';
import { IUser } from '../shared/user.model';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent {
  cart: IProduct[] = [];
  showSignOutMenu: boolean = false;

  constructor(
    private userService: UserService,
    private cartService: CartService
  ) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('init');
    this.cartService.getCart().subscribe({
      next: (newCart) => (this.cart = newCart),
    });
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  getUser(): IUser | null {
    return this.userService.user;
  }

  signOut() {
    this.userService.signOut();
    this.showSignOutMenu = false;
  }
}
