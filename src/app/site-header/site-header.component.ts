import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {
  showSignOutMenu: boolean = false;

  constructor() { }

  toggleSignOutMenu() {
    this.showSignOutMenu = !this.showSignOutMenu;
  }
}
