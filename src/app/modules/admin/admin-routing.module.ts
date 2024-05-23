import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';

// localhost:4200/auth/login
const routes: Routes = [{
  path: '',
  component: AdminComponent,
  children: [
    {
      path: 'listar',
      component: ListComponent,
    },
    {
      path: 'register',
      component: RegisterComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
