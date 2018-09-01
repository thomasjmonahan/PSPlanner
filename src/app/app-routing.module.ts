import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AssessmentComponent} from './assessment/assessment.component';
import {HomeComponent} from './home/home.component';
import {LearnComponent} from './learn/learn.component';
import {TeachComponent} from './teach/teach.component';
import {ShareComponent} from './share/share.component';
const routes: Routes = [
  {
    path:'assessment',
    component: AssessmentComponent
  },
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'share',
    component: ShareComponent
  },
  {
    path:'teach',
    component: TeachComponent
  },
  {
    path:'learn',
    component: LearnComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
