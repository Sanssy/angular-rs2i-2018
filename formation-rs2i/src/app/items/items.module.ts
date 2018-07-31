import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './containers/list/list.component';
import { DeliveredListComponent } from './containers/delivered-list/delivered-list.component';
import { AbstractComponent } from './containers/abstract/abstract.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ListComponent, DeliveredListComponent, AbstractComponent],
  exports: [ListComponent, DeliveredListComponent]
})
export class ItemsModule { }
