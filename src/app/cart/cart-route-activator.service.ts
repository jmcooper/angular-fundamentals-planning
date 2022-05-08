import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root',
})
export class CartRouteActivator implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    return this.userService.getUser().pipe(map((user) => !!user));
  }
}
