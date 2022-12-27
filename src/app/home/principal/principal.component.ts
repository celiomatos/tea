import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tea-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass']
})
export class PrincipalComponent implements OnInit {

  app = require('./../../../../package.json')

  constructor() { }

  ngOnInit() { }



}
