import { Component, OnInit } from '@angular/core';
import { CartRepositoryService } from '../cart/cart-repository.service';
import { UserRepositoryService } from '../shared/user-repository.service';
import { IUser } from '../shared/user.model';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {
  showSignOutMenu: boolean = false;

  constructor(private userRepository: UserRepositoryService, private cartRepository: CartRepositoryService) { }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  getUser(): IUser | null {
    return this.userRepository.user;
  }

  getCartCount(): number {
    return this.cartRepository.cart.length;
  }

  signOut() {
    this.userRepository.signOut();
  }

}
