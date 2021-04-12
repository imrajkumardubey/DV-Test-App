import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { StorageService } from 'src/app/services';

@Injectable({
  providedIn: 'root'
})

export class OtherGuard implements CanActivate {

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  canActivate(): boolean {
    if (this.storage.isUserLogin()) {
      this.router.navigate(['/dashboard']);
    }
    return !this.storage.isUserLogin();
  }

}
