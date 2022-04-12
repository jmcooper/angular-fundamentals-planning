import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRepositoryService } from 'src/app/shared/user-repository.service';
import { IUserCredentials } from 'src/app/shared/user.model';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };
  private processing = false;
  signInError = false;

  constructor(private userRepository: UserRepositoryService, private router: Router) { }

  signIn() {
    this.signInError = false;
    this.userRepository.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => this.signInError = true
    });
  }

}
