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
  user: IUser | null = null;
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
    this.userService.getUser().subscribe({
      next: (user) => (this.user = user),
    });
    this.cartService.getCart().subscribe({
      next: (newCart) => (this.cart = newCart),
    });
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut() {
    this.userService.signOut();
    this.showSignOutMenu = false;
  }
}
