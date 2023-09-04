import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tea-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  app = require('./../../../../package.json')

  constructor(private readonly router: Router) {
    console.log(this.app.version);
  }

  logar() {
    this.router.navigate(['/']);
  }

}
