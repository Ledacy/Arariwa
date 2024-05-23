import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducacionRoutingModule } from './educacion-routing.module';
import { EducacionComponent } from './educacion.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [EducacionComponent],
  imports: [CommonModule, EducacionRoutingModule, SharedModule,]
})
export class EducacionModule { }
