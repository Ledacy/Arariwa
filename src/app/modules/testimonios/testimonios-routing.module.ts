import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimoniosComponent } from './testimonios.component';

const routes: Routes = [
  {
    path: '',
    component: TestimoniosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimoniosRoutingModule { }
