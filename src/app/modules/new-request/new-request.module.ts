import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewRequestRoutingModule } from './new-request-routing.module';
import { NewRequestComponent } from './new-request.component';


@NgModule({
  declarations: [
    NewRequestComponent
  ],
  imports: [
    CommonModule,
    NewRequestRoutingModule
  ]
})
export class NewRequestModule { }
