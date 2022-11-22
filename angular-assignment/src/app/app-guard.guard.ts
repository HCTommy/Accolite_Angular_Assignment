import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { userService } from './service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate {
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(window.sessionStorage.getItem("loggedIn")!=="TRUE"){
        return false;
      }
    return true;
    
  }
  
  
}
