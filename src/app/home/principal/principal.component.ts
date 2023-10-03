import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tea-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent {

  app = require('./../../../../package.json')

  constructor(private readonly router: Router) { }


  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  user = () => sessionStorage.getItem('name');

}
