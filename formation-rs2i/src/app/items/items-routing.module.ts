import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './containers/list/list.component';
import { DeliveredComponent } from './containers/delivered/delivered.component';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'delivered', component: DeliveredComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ItemsRoutingModule { }
