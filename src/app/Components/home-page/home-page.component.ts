import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  isSubNavigation :any = [];

  // this variable is used to list out the side bar links
  sideBarLinks = [{
    pageName:"Dashboard",
    icon:"ph ph-chart-pie-slice",
    route:"dashboard",
    downArrow:"ph ph-caret-down",
    subNavigationLinks:[
      {
        pageName:"Management",
        route:"dashboard"
        },
        {
        pageName:"Review",
        route:"review"
        }
    ]
  },{
    pageName:"TN Management",
    icon:"ph ph-identification-badge",
    route:"tn-management",
    downArrow:"",
    subNavigationLinks:[]
  },{
    pageName:"Fresher Management",
    icon:"ph ph-student",
    route:"impact-training",
    downArrow:"ph ph-caret-down",
    subNavigationLinks:[
      {
      pageName:"Impact training",
      route:"impact-training"
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
},
{
  pageName:"Courses",
    icon:"ph ph-book-bookmark",
    route:"fgh",
    downArrow:"",
    subNavigationLinks:[]
},
{
  pageName:"Notifications",
    icon:"ph ph-bell-ringing",
    route:"fgh",
    downArrow:"ph ph-caret-down",
    subNavigationLinks:[
      {
        pageName:"E-mail",
        route:"cfgh"
      }
    ]
},
{
  pageName:"Adminstration",
    icon:"ph ph-wrench",
    route:"fgh",
    downArrow:"",
    subNavigationLinks:[]
}

]


//this function is used to toggle the sub navigation links
subNavLink(index:any){
  if(!this.isSubNavigation[index]){
  if( this.sideBarLinks[index].subNavigationLinks.length > 0){

    // this loop is used to set all the sub navigation links to false
    for(let i=0;i<this.sideBarLinks.length;i++){
      if(this.isSubNavigation[i] == true){
      this.sideBarLinks[i].downArrow = "ph ph-caret-down";
      this.isSubNavigation[i] = false;
      }
    }

    this.sideBarLinks[index].downArrow = "ph ph-caret-up";

    this.isSubNavigation[index] = true;
  }
  }
  else{
  this.sideBarLinks[index].downArrow = "ph ph-caret-down";
  this.isSubNavigation[index] = false;
  }
}

}
