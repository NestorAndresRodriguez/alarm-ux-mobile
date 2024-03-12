import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { loginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    loginRoutingModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
