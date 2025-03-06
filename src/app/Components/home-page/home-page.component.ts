import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  isSubNavigation = false;

  // this variable is used to list out the side bar links
  sideBarLinks = [{
    pageName:"Dashboard",
    icon:"ph ph-chart-pie-slice",
    route:"dashboard",
    downArrow:"",
    subNavigationLinks:[]
  },{
    pageName:"TN Management",
    icon:"ph ph-identification-badge",
    route:"tn-management",
    downArrow:"",
    subNavigationLinks:[]
  },{
    pageName:"Fresher Management",
    icon:"ph ph-student",
    route:"fresher-management",
    downArrow:"ph ph-caret-down",
    subNavigationLinks:[
      {
      pageName:"Impact training",
      route:"fresher-management/impact-training"
      },
      {
      pageName:"CoE Training",
      route:"tn-management"
      },
      {
      pageName:"Internship",
      route:"tn-management"
      },
      {
      pageName:"Shine",
      route:"tn-management"
      },
      {
      pageName:"RMG",
      route:"tn-management"
      },
]
}]

//this function is used to toggle the sub navigation links
subNavLink(index:any){
  
  if(!this.isSubNavigation){
  if( this.sideBarLinks[index].subNavigationLinks.length > 0)
    this.isSubNavigation = true;
  }
  else
  this.isSubNavigation = false;
}

}
