import { map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { BaseService } from '../base';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  userLoginAPI(data) {
    return this.httpClient.post<any>(this.getApiRoutes.userLoginAPIUrl, data)
      .pipe(map(response => {
        return response;
      }));
  }

  userInfoAPI() {
    return this.httpClient.get<any>(this.getApiRoutes.userInfoAPIUrl)
      .pipe(map(response => {
        return response;
      }));
  }

}
