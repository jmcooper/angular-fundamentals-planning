import { Component, OnInit } from '@angular/core';
import { CartRepositoryService } from '../cart/cart-repository.service';
import { IProduct } from '../catalog/product.model';
import { UserRepositoryService } from '../shared/user-repository.service';
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
    private userRepository: UserRepositoryService,
    private cartRepository: CartRepositoryService
  ) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('init');
    this.cartRepository.getCart().subscribe({
      next: (newCart) => (this.cart = newCart),
    });
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  getUser(): IUser | null {
    return this.userRepository.user;
  }

  signOut() {
    this.userRepository.signOut();
    this.showSignOutMenu = false;
  }
}
