import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full' // redirection vers le login a partir du .com
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true
       }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
