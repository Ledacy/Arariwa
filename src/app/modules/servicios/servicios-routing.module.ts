import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditoComponent } from './credito/credito.component';
import { ServiciosComponent } from './servicios.component';
import { BancoComponent } from './banco/banco.component';

const routes: Routes = [
  {
    path: '',
    component: ServiciosComponent,
    children: [
      {
        path: 'credito',
        component: CreditoComponent,
      },
      {
        path: 'banco',
        component: BancoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosRoutingModule {}
