import { NgModule } from '@angular/core';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { MaterialModule } from '../shared/material.module';
import { NotFoundComponent } from './not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    NotFoundRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class NotFoundModule { }
