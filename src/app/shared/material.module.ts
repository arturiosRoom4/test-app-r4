import { NgModule } from '@angular/core';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
