import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestimoniosRoutingModule } from './testimonios-routing.module';
import { TestimoniosComponent } from './testimonios.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TestimoniosComponent],
  imports: [CommonModule, TestimoniosRoutingModule, SharedModule,]
})
export class TestimoniosModule { }
