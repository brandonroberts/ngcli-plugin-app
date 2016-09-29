import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeView } from './home-view.component';

export const routes = [
  {path: 'lazy', loadChildren: './lazy.module#LazyModule'},
  {path: '', component: HomeView}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
