import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TraineeDetailsService {

  traineeDetails : any = [];
  constructor(private http:HttpClient) { 

  }

  //this block is used to retrieve the Impact Trainee data
  impactTraineeDetails(){
    return this.http.get<any>(environment.impactTraineeDetails);
  }
  //this block is used to retrieve the Impact Trainee data
  internshipDetails(){
    return this.http.get<any>(environment.internshipDetails);
  }


  //this method is used to delete Impact Trainee Data
  deleteImpactTrainee(Trainees:any){
    this.http.post(environment.deleteImpactTrainee,Trainees, { responseType: 'text' }).subscribe(()=>{
      console.log("successfully deleted");
    });
  }

  // this method is used to delete All the Impact Trainees
  deleteAllImpactTrainees(){
    this.http.post(environment.deleteAllImpactTrainees,{responseType : 'text'}).subscribe(()=>{
      console.log("successfully deleted");
    });
  }
  //this method is used to delete Impact Trainee Data
  deleteInternship(Trainees:any){
    this.http.post(environment.deleteInternship,Trainees, { responseType: 'text' }).subscribe(()=>{
      console.log("successfully deleted");
    });
  }

  // this method is used to delete All the Impact Trainees
  deleteAllInternship(){
    this.http.post(environment.deleteAllInternship,{responseType : 'text'}).subscribe(()=>{
      console.log("successfully deleted");
    });
  }

  // this method is used to send the Excel to the server
  sendExcelFile(file:any){
    const formData = new FormData();
    if(file)
      formData.append('file', file);

    this.http.post(environment.sendExcelFile, formData).subscribe(
      (res) => window.location.reload(),
      (err) => console.log(err)
    );
  }
  // this method is used to send the Excel to the server
  internshipSendExcelFile(file:any){
    const formData = new FormData();
    if(file)
      formData.append('file', file);

    this.http.post(environment.sendExcelFile, formData).subscribe(
      (res) => window.location.reload(),
      (err) => console.log(err)
    );
  }

}
