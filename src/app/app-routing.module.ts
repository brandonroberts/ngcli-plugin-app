import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'lazy', loadChildren: './lazy.module#LazyModule' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
