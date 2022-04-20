import { Component, OnInit } from '@angular/core';
import { CartRepositoryService } from '../cart/cart-repository.service';
import { UserRepositoryService } from '../shared/user-repository.service';
import { IUser } from '../shared/user.model';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent {
  showSignOutMenu: boolean = false;

  constructor(
    private userRepository: UserRepositoryService,
    private cartRepository: CartRepositoryService
  ) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('init');
  }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  getUser(): IUser | null {
    return this.userRepository.user;
  }

  getCartCount(): number {
    console.log('getting cart count');
    // this.cartRepository.getCart().subscribe();
    return this.cartRepository.cart.length;
  }

  signOut() {
    this.userRepository.signOut();
    this.showSignOutMenu = false;
  }
}
