import { Component } from '@angular/core';
import { userService } from '../service/user/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  userName:any
  password:any

  constructor(private userService:userService){

  }

  logIn():void{
    this.userService.login(this.userName,this.password)
  }

}
