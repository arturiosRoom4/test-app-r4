import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './components/alert/alert.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AlertComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    AlertComponent,
    MaterialModule,
  ]
})
export class SharedModule { }
