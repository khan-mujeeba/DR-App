import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plan-phase',
  templateUrl: './plan-phase.component.html',
  styleUrls: ['./plan-phase.component.css']
})
export class PlanPhaseComponent implements OnInit {
  @ViewChild('closebutton') closebutton:any;
  phase:any;
  plans:any=[{'planname':'Planning','plandescription':'DR Live Run 2022 Planning','order':'1'},
  {'planname':'Preparation','plandescription':'DR Live Run (DR Failover to DRC, StrateQ) Preparation','order':'2'},
  {'planname':'Disaster Declaration','plandescription':'DR Live Run - Disaster Declaration','order':'3'},
  {'planname':'Technical Recovery','plandescription':'Technical Recovery @DR, StrateQ','order':'4'}]
  
  
  constructor() {
  }

  ngOnInit() {
  this.phase=history.state;
  }
  onSubmit(planForm:NgForm){
    var dr=planForm.value;
     this.plans.push(dr);
     planForm.resetForm();
    this.closebutton.nativeElement.click();
  }

}
