import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ItemsRoutingModule } from './items-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ListComponent } from './containers/list/list.component';
import { DeliveredComponent } from './containers/delivered/delivered.component';
import { AbstractComponent } from './containers/abstract/abstract.component';
import { AddComponent } from './containers/add/add.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule,
  ],
  declarations: [ListComponent, DeliveredComponent, AbstractComponent, AddComponent],
  exports: [ListComponent, DeliveredComponent]
})
export class ItemsModule { }
