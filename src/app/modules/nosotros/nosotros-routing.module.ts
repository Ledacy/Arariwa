import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosModule} from './nosotros.module';
import { NosotrosComponent } from './nosotros.component';

const routes: Routes = [
  {
    path: '',
    component: NosotrosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NosotrosRoutingModule { }
