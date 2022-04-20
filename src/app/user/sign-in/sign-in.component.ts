import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { IUserCredentials } from 'src/app/shared/user.model';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };
  signInError = false;

  constructor(private userService: UserService, private router: Router) {}

  signIn() {
    this.signInError = false;
    this.userService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => (this.signInError = true),
    });
  }
}
