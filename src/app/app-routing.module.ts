import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'firm/settings', loadChildren: () => import('./modules/firm-settings/firm-settings.module').then(m => m.FirmSettingsModule) },
  { path: 'invites', loadChildren: () => import('./modules/new-request/new-request.module').then(m => m.NewRequestModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
