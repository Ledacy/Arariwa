import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from './modules/auth/service/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    // canActivate: [AuthGuard],
    loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule),
  },
  {
    path: 'reclamo',
    loadChildren: () => import("./modules/reclamo/reclamo.module").then(m => m.ReclamoModule),
  },
  {
    path: 'denuncia',
    canActivate: [AuthGuard],
    loadChildren: () => import("./modules/denuncia/denuncia.module").then(m => m.DenunciaModule),
  },
  {
    path: 'nosotros',
    loadChildren: () => import("./modules/nosotros/nosotros.module").then(m => m.NosotrosModule),
  },
  {
    path: 'agencias',
    loadChildren: () => import("./modules/agencia/agencia.module").then(m => m.AgenciaModule),
  },
  {
    path: 'testimonios',
    loadChildren: () => import("./modules/testimonios/testimonios.module").then(m => m.TestimoniosModule),
  },
  {
    path: 'educacion',
    loadChildren: () => import("./modules/educacion/educacion.module").then(m => m.EducacionModule),
  },
  {
    path: 'servicios',
    loadChildren: () => import("./modules/servicios/servicios.module").then(m => m.ServiciosModule),
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
