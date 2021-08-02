import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirmActivityRoutingModule } from './firm-activity-routing.module';
import { FirmActivityComponent } from './firm-activity.component';


@NgModule({
  declarations: [
    FirmActivityComponent
  ],
  imports: [
    CommonModule,
    FirmActivityRoutingModule
  ]
})
export class FirmActivityModule { }
