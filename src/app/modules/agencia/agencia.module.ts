import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciaRoutingModule } from './agencia-routing.module';
import { AgenciaComponent} from './agencia.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AgenciaComponent],
  imports: [CommonModule, AgenciaRoutingModule, SharedModule,]
})
export class AgenciaModule {}
