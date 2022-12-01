import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:FormGroup;
  constructor(private fb:FormBuilder,private router:Router) {this.login=this.fb.group({
    username:['',Validators.required],
    password:['',[Validators.required]],}) }

  ngOnInit() {
  }
    
    onSubmit(formValue: { username: "admin"; password: "12345"; }) 
    {
      console.log(formValue)
      if(formValue.username && formValue.password){
        this.router.navigate(['/dashboard'])
      }
  }


}
