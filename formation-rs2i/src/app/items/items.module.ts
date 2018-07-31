import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './containers/list/list.component';
import { DeliveredComponent } from './containers/delivered/delivered.component';
import { AbstractComponent } from './containers/abstract/abstract.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListComponent, DeliveredComponent, AbstractComponent],
  exports: [ListComponent, DeliveredComponent]
})
export class ItemsModule { }
