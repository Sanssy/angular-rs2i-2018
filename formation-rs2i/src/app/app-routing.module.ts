import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full' // redirection vers le login a partir du .com
  },
  {
    path: 'items',
    loadChildren: './items/items.module#ItemsModule',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        preloadingStrategy: PreloadAllModules,
       }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
