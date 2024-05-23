import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamoRoutingModule } from './reclamo-routing.module';
import { ReclamoComponent } from './reclamo.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ReclamoComponent],
  imports: [CommonModule, ReclamoRoutingModule, SharedModule,]
})
export class ReclamoModule { }
