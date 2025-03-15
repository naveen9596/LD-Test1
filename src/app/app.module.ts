import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { DashboardPageComponent } from './Components/dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { TNManagementPageComponent } from './Components/tnmanagement-page/tnmanagement-page.component';

import { ImpactTrainingPageComponent } from './Components/impact-training-page/impact-training-page.component';
import { ExcelDatePipePipe } from './Custompipes/excel-date-pipe.pipe';
import { InternshipComponent } from './Components/Internship/internship.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    DashboardPageComponent,
    TNManagementPageComponent,
    ImpactTrainingPageComponent,
    ExcelDatePipePipe,
    InternshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
