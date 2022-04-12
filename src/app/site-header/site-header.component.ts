import { Component, OnInit } from '@angular/core';
import { UserRepositoryService } from '../shared/user-repository.service';
import { IUser } from '../shared/user.model';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {
  showSignOutMenu: boolean = false;

  constructor(private userRepository: UserRepositoryService) { }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  getUser(): IUser | null {
    return this.userRepository.user;
  }

  signOut() {
    this.userRepository.signOut();
  }

}
