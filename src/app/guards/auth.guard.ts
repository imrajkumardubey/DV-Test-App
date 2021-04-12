import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { StorageService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  canActivate(): boolean {
    if (!this.storage.isUserLogin()) {
      this.router.navigate(['/sign-in']);
    }
    return this.storage.isUserLogin();
  }

}
