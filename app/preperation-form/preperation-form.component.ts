import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preperation-form',
  templateUrl: './preperation-form.component.html',
  styleUrls: ['./preperation-form.component.css']
})
export class PreperationFormComponent  {
 @Input() name: string='';
 @Input() description: string='';
 @Input() startdate: string='';
 @Input() enddate: string='';
constructor(){}
 
 

}
