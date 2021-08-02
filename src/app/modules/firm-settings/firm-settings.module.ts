import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirmSettingsRoutingModule } from './firm-settings-routing.module';
import { FirmSettingsComponent } from './firm-settings.component';


@NgModule({
  declarations: [
    FirmSettingsComponent
  ],
  imports: [
    CommonModule,
    FirmSettingsRoutingModule
  ]
})
export class FirmSettingsModule { }
