import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { HomeComponent } from './home/home.component';
import { TeachComponent } from './teach/teach.component';
import { LearnComponent } from './learn/learn.component';
import { ShareComponent } from './share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AssessmentComponent,
    HomeComponent,
    TeachComponent,
    LearnComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
