import { Component } from '@angular/core';
import { userService } from './service/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-assignment';
  
  constructor(private userService:userService){

  }

  alreadyLoggedIn():boolean{
    if(window.sessionStorage.getItem("loggedIn")==="TRUE"){
      return true;
    }
    return false;
    //return window.sessionStorage["loggedIn"]
    //return userService.loggedIn;
  }

  loggedInUser():any{
    return window.sessionStorage.getItem("userName")
    //return userService.userName;
  }

  logoff():void{
    this.userService.logoff();
  }
  


}
