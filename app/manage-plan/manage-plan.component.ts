import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-plan',
  templateUrl: './manage-plan.component.html',
  styleUrls: ['./manage-plan.component.css']
})
export class ManagePlanComponent implements OnInit {
  // alphas:any = ["1", "2",];
  // tabName:any=["Overall Readiness","Backup & Batch Job Processing (18:00 – 00:00)",];
  // tabEdit:any=[true,true];
  // enable:any=false;
  // title = 'itnc-app';
  // name : any='hello thjuhuhre';
  // showproduct : any =true;
  // arr : { [key:string]:any; } = {'1':['1','2'],'2':['1','2','3']};

  // @ViewChild('closebutton') closebutton:any;
  // drs:any=[{'drname':'DR Excercise 1','description':'Hello there','startdate':'2022-03-03','enddate':'2022-03-03','status':'Developing'},
  // {'drname':'DR Excercise 2','description':'Hello there in Excercise 2','startdate':'2022-03-04','enddate':'2022-03-04','status':'Developing'}]
  // constructor() { }

  @ViewChild('closebutton') closebutton:any;
  drs:any=[{'drname':'DR Live Run 1','description':'Disaster Recovery Plan for Critical Business Functions (CBF)','startdate':'2022-06-16','enddate':'2022-06-17','status':'Developing'},
  {'drname':'DR Live Run 2','description':'Disaster Recovery Plan for Critical Business Functions (CBF)','startdate':'2022-07-16','enddate':'2022-07-17','status':'Developing'}]
  constructor() { }

  ngOnInit() {
  }
onSubmit(serverForm: NgForm){
  var dr=serverForm.value;
  dr['status']='Developing';
   this.drs.push(dr);
   serverForm.resetForm();
  this.closebutton.nativeElement.click();
}

}
