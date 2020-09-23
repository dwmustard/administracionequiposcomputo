import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService){

  }
  canActivate(): Observable<boolean> {
    return this.auth.isLogged.pipe(
      take(1),
      map((isLogged: boolean) => !isLogged)
    );
  }
}
