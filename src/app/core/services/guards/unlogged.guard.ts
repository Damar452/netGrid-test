import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class UnloggedGuard implements CanActivate {

  constructor(
    private router: Router,
    private storageService: StorageService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = this.storageService.getUserData();
      if(user) {
        this.router.navigate(['/list']);
        return false;
      } else {
        return true;
      }
  }
  
}
