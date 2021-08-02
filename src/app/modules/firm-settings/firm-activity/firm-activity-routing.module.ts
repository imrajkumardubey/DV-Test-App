import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirmActivityComponent } from './firm-activity.component';

const routes: Routes = [{ path: '', component: FirmActivityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirmActivityRoutingModule { }
