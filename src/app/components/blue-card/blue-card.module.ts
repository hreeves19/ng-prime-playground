import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueCardComponent } from './blue-card.component';
import { CardModule } from 'primeng/card';


@NgModule({
  declarations: [
    BlueCardComponent
  ],
  exports: [BlueCardComponent],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class BlueCardModule { }
