import { Component } from '@angular/core';

@Component({
  selector: 'app-tnmanagement-page',
  templateUrl: './tnmanagement-page.component.html',
  styleUrls: ['./tnmanagement-page.component.css']
})
export class TNManagementPageComponent {
  TNData:any =[];

  constructor(){
    this.TNData=[
      {
        "ACE_ID":"ACE12391",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing"
      }
    ]
  }
}
