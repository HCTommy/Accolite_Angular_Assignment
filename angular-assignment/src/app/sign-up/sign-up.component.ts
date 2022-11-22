import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userService } from '../service/user/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  register:any
  password:any
  repassword:any
  userName:any


  ngOnInit(): void {
    this.register=new FormGroup({
      name:new FormControl("",[Validators.required,Validators.minLength(6)]),
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required,Validators.minLength(8)]),
      repassword:new FormControl("",[Validators.required,Validators.minLength(8)])
      
    });
  }

  constructor(private userService:userService){

  }

  validRePassword(): boolean{
    return this.password===this.repassword;
  }

  alreadyExistUserName():boolean{
    return this.userService.alreadyExistUserName(this.userName);
  }

  regist():void{
    //alert("register")
    this.userService.register(this.userName,this.password)

  }

}
