import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { DashboardPageComponent } from './Components/dashboard-page/dashboard-page.component';
import { TNManagementPageComponent } from './Components/tnmanagement-page/tnmanagement-page.component';
import { ImpactTrainingPageComponent } from './Components/impact-training-page/impact-training-page.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },{
    path:"homePage",
    component: HomePageComponent,
    children:[
      {
        path:"",
        pathMatch:"full",
        redirectTo:"dashboard"
      },
      {
        path:"dashboard",
        component:DashboardPageComponent
      },
      {
        path:"tn-management",
        component:TNManagementPageComponent
      }
      ,
      {
        path:"impact-training",
        component:ImpactTrainingPageComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
