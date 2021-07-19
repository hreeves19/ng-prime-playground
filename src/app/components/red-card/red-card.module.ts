import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedCardComponent } from './red-card.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    RedCardComponent
  ],
  exports: [RedCardComponent],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class RedCardModule { }
