import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirmSettingsComponent } from './firm-settings.component';

const routes: Routes = [{ path: '', component: FirmSettingsComponent }, { path: 'activity', loadChildren: () => import('./firm-activity/firm-activity.module').then(m => m.FirmActivityModule) }, { path: 'preferences', loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmSettingsRoutingModule { }
