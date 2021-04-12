import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})

export class StorageService extends BaseService{

  private readonly SESSION_ID: string = 'SESSION_ID';
  private readonly REFRESH_ID: string = 'REFRESH_ID';
  private readonly USER_DATA: string = 'USER_DATA';

  getSessionId(): string {
    return localStorage.getItem(this.SESSION_ID);
  }

  setSessionId(id): void {
    localStorage.setItem(this.SESSION_ID, id);
  }

  getRefreshId(): string {
    return localStorage.getItem(this.REFRESH_ID);
  }

  setRefreshId(id): void {
    localStorage.setItem(this.REFRESH_ID, id);
  }

  isUserLogin(): any {
    return !!this.getSessionId();
  }

  doLogout(): void {
    localStorage.removeItem(this.SESSION_ID);
    localStorage.removeItem(this.REFRESH_ID);
  }

}
