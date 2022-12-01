import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:ManagePlanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
