import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamoModule } from './reclamo.module';
import { ReclamoComponent } from './reclamo.component';

const routes: Routes = [
  {
    path: '',
    component: ReclamoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamoRoutingModule { }
