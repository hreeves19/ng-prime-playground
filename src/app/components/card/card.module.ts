import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { BlueCardModule } from '../blue-card/blue-card.module';
import { RedCardModule } from '../red-card/red-card.module';


@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [CardComponent],
  imports: [
    CommonModule,
    BlueCardModule,
    RedCardModule
  ]
})
export class CardModule { }
