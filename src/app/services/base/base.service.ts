import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { App as AppConfig } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})

export class BaseService {

  constructor(
    protected router: Router,
    protected appConfig: AppConfig,
    protected httpClient: HttpClient,
  ) { }

  get getHttpClient(): HttpClient {
    return this.httpClient;
  }

  get getAppConfig(): AppConfig {
    return this.appConfig;
  }

  get getApiRoutes(): any {
    return this.getAppConfig.getApiRoutes;
  }

}
