import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tnmanagement-page',
  templateUrl: './tnmanagement-page.component.html',
  styleUrls: ['./tnmanagement-page.component.css']
})
export class TNManagementPageComponent {
  TNData:any =[];
  checkTNData = [];
  checkboxIndex= 1;

  showMemberManagement:boolean = false;
  showUploadFile:boolean = false;
  showEditMember:boolean = false;

  memberForm:FormGroup;
  uploadForm:FormGroup;
  KeywordForm:FormGroup;
  editMemberForm:FormGroup;

  filterByKeyword:string = "";
  filterByACEID: string ="";
  filterByFirstName:string="";
  filterByLastName:string= "";
  filterByDesignation:string="";
  filterByTeam:string = "";


  constructor(private formBuilder: FormBuilder) { 

    // this FormGroup is used to filter the data by Keyword
    this.KeywordForm = this.formBuilder.group({
      filterByKeyword: new FormControl(['',Validators.required])
    });

    // this FormGroup is used to apply the conditions to the member Add Form
    this.memberForm= this.formBuilder.group({

      ACE_ID: ['',Validators.required],
      First_Name: ['',Validators.required],
      Last_Name: ['',Validators.required],
      Designation: ['',Validators.required],
      Team: ['',Validators.required],
      Practice: ['',Validators.required]

    });
    // this FormGroup is used to apply the conditions to the member Edit Form
    this.editMemberForm= this.formBuilder.group({

      ACE_ID: ['',Validators.required],
      First_Name: ['',Validators.required],
      Last_Name: ['',Validators.required],
      Designation: ['',Validators.required],
      Team: ['',Validators.required],
      Practice: ['',Validators.required]

    });

    // this FormGroup is used to apply the condition in File Upload Form
    this.uploadForm = this.formBuilder.group({
      fileUpload:['',Validators.required]
    });

    // this Array is the Full details of the TN Team
    this.TNData=[
      {
        "ACE_ID":"ACE12391",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12392",
        "First_Name": "Karthick",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12394",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12393",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12395",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12396",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12397",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12398",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12400",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Development",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12401",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12402",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12403",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12404",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12405",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12406",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12407",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      },
      {
        "ACE_ID":"ACE12408",
        "First_Name": "Manikandan",
        "Last_Name": "Obulisamy",
        "Designation": "Software Engineer",
        "Team": "Testing",
        "Practice":"Talent Nurturing"
      }
    ]

    this.checkTNData = this.TNData;
    //this code is used when the filterByKeyword variable disturbed it calls filter function
    this.KeywordForm.valueChanges.subscribe((value) => {
      // if(value.filterByKeyword !==  '')
        this.filterData(value);
    });
  }

  // this method is used to show the member management
  showMember(){
    if(this.showMemberManagement){
      this.showMemberManagement = false;
    }else{
      this.showMemberManagement = true;
    }
  }

  //this method is used to clear the data in form
  clearForm(){
    this.memberForm.reset();
    this.uploadForm.reset();
  }

  // this method is used to show the file upload form
  showFileUpload(){
    if(this.showUploadFile){
      this.showUploadFile = false;
    }else{
      this.showUploadFile = true;
    }
  }


  // this method is used to select all the checkboxes
  clickAllCheckBoxes(){
    for(var i=0;i<this.TNData.length;i++){
      const checkbox = document.getElementById("checkbox"+i) as HTMLInputElement;
      if(this.checkboxIndex == 1){
        checkbox.checked = true;
      }else{
        checkbox.checked = false;
      }

    }
    if(this.checkboxIndex == 1)
    this.checkboxIndex = 2;
    else
    this.checkboxIndex = 1;
  }


  // this method is used to filter the data
  filterData(value:any){
        this.TNData = this.checkTNData;
      if(value.filterByKeyword != ''){
        let filtertedData = new Set<any>();
        for(var i=0;i<this.TNData.length;i++){
          var data = Object.values(this.TNData[i]);
          for(var j=0;j<data.length;j++){
            var checkData = String(data[j]).toLowerCase();
          if(checkData.includes(value.filterByKeyword.toLowerCase())){
            filtertedData.add(this.TNData[i]);
          }
        }
        }


        if(filtertedData.size == 0)
          this.TNData = [];
        else
        this.TNData = [...filtertedData];
    }
  }

  // this method is used to Add the Member
  addMember(value: any){
    this.TNData.push(value);
    alert("successfully Added "+value.First_Name);
    this.showMember();
  }

  // this method is used to remove the member
  deleteMember(index:any){
    if(confirm("sure you want to Remove "+this.TNData[index].First_Name))
    this.TNData.splice(index,1);
  }

  // this method is used to show the Edit form
  showEdit(){
    if(this.showEditMember)
      this.showEditMember = false;
    else
    this.showEditMember = true;
  }

  // this method is used to fill the Member Details in Edit Form
  editMember(index:any){
    this.showEdit();
    this.editMemberForm.controls['ACE_ID'].setValue(this.TNData[index].ACE_ID);
    this.editMemberForm.controls['First_Name'].setValue(this.TNData[index].First_Name);
    this.editMemberForm.controls['Last_Name'].setValue(this.TNData[index].Last_Name);
    this.editMemberForm.controls['Designation'].setValue(this.TNData[index].Designation);
    this.editMemberForm.controls['Team'].setValue(this.TNData[index].Team);
    this.editMemberForm.controls['Practice'].setValue(this.TNData[index].Practice);
  }


  // this method is used to Edit the Member Details
  EditedMemberDetails(value:any){
    
    for(var i=0;i<this.TNData.length;i++){
      if(this.TNData[i].ACE_ID === value.ACE_ID){
        this.TNData[i] = value;
        break;
      }
    }

    this.showEdit();
  }

  // this method is used to delete all the members
  deleteAllMembers(){
    const checkbox = document.getElementById("parentCheckBox") as HTMLInputElement;
    if(checkbox.checked){
    if(confirm("sure you want to remove all Members")){
    this.TNData = [];
    checkbox.checked = false;
    }
    }else{
      var checkedIndex = 0;
      for(var i=0;i<this.TNData.length;i++){
        const checkbox = document.getElementById("checkbox"+i) as HTMLInputElement;
        if(checkbox.checked){
          this.deleteMember(i);
          ++checkedIndex;
          checkbox.checked = false;
        }
  
      }
      if(checkedIndex == 0)
        alert("select the Members to remove");
    }
  }
}
