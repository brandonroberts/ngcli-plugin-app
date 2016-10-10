import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule, Http} from '@angular/http';

@Component({
  selector: 'lazy-comp',
  template: 'lazy!'
})
export class LazyComponent {}

@NgModule({
  imports: [
    RouterModule.forChild([
     {path: '', component: LazyComponent}
    ]),
    HttpModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule {
  constructor(http: Http) {}
}

export class SecondModule {}
