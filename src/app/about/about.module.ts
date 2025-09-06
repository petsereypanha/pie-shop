import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about.component';

const ABOUT_ROUTES:Routes = [
  {
    path: '',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [AboutComponent],
  imports: [
    RouterModule.forChild(ABOUT_ROUTES),
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
