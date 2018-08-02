import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FilterByStatePipe } from './pipes/filter-by-state.pipe';

import { StateDirective } from './directives/state.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

 // external libraries
 import { IconsModule } from '../icons/icons.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { RouterModule } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule,
    IconsModule,
    ReactiveFormsModule
  ],
  declarations: [NavComponent, ItemComponent, CapitalizePipe, FilterByStatePipe, StateDirective, FormComponent, FormReactiveComponent],
  exports: [NavComponent, ItemComponent, FilterByStatePipe, FormComponent, FormsModule, FormReactiveComponent]
})
export class SharedModule { }
