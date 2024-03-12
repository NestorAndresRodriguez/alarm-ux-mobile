import { Component, OnInit } from '@angular/core';
import { Meta } from '../model/Meta';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  listaMetas!: Meta[];

  constructor() {
  
  }
  ngOnInit(): void {
    this.listaMetas = new Array<Meta>();
    this.listaMetas.push(new Meta("Meta 1","75%"))
    this.listaMetas.push(new Meta("Meta 2",'20%'))
    this.listaMetas.push(new Meta("Meta 3",'15%'))
    this.listaMetas.push(new Meta("Meta 4",'15%'))
    this.listaMetas.push(new Meta("Meta 5",'26%'))
    console.log(this.listaMetas)
  }

}
