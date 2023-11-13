import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';

@Component({
  selector: 'tea-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  app = require('./../../../../package.json');
  form: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,) {
  }

  ngOnInit(): void {
    sessionStorage.clear();
    this.form = new FormGroup({
      user: new FormControl('', [Validators.required]),
      pw: new FormControl('', [Validators.required])
    });
  }

  logar() {
    const user = this.form.get('user')?.value;
    const pw = this.form.get('pw')?.value;

    const loginRequest = new LoginRequest(user, pw);

    this.authService.authenticate(loginRequest).subscribe({
      next: (data: LoginResponse) => {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('name', data.name);
        this.router.navigate(['/']);
      },
    });
  }

  clear() {
    this.form.get('user')?.setValue('');
    this.form.get('pw')?.setValue('');
  }

}
