import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRepositoryService } from 'src/app/shared/user-repository.service';
import { IUser } from 'src/app/shared/user.model';

@Component({
  selector: 'bot-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registrationError: boolean = false;

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(private userRepository: UserRepositoryService, private router: Router) { }

  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }

  register() {
    let user: IUser = this.registerForm.value;
    this.userRepository.register(user).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => this.registrationError = true
    });;
  }

}
