import { Component, OnInit } from '@angular/core';
import { User } from "../model/User";
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  form!: FormGroup;
  user! : User;

  constructor(private router: Router) {
    this.form = new FormGroup({})
   }

  ngOnInit() {
    this.user = new User();
  }

  login(){
      this.router.navigateByUrl('/home')
  }

}
