import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { NavigationComponent } from './navigation.component';

@NgModule({
  declarations: [NavigationComponent],
  exports: [NavigationComponent],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class NavigationModule { }
