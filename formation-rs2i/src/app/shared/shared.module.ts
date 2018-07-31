import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterByStatePipe } from './pipes/filter-by-state.pipe';
import { DeliveredComponent } from './components/delivered/delivered.component';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavComponent, ItemComponent, CapitalizePipe, FilterByStatePipe, DeliveredComponent, StateDirective],
  exports: [NavComponent, ItemComponent, FilterByStatePipe]
})
export class SharedModule { }
