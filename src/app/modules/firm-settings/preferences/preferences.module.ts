import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferencesRoutingModule } from './preferences-routing.module';
import { PreferencesComponent } from './preferences.component';
import { FirmPreferencesComponent } from './firm-preferences/firm-preferences.component';
import { FundPreferencesComponent } from './fund-preferences/fund-preferences.component';
import { DesignPreferencesComponent } from './design-preferences/design-preferences.component';
import { ExportPreferencesComponent } from './export-preferences/export-preferences.component';


@NgModule({
  declarations: [
    PreferencesComponent,
    FirmPreferencesComponent,
    FundPreferencesComponent,
    DesignPreferencesComponent,
    ExportPreferencesComponent
  ],
  imports: [
    CommonModule,
    PreferencesRoutingModule
  ]
})

export class PreferencesModule { }
