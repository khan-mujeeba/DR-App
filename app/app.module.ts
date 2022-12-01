import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent,  } from './products/products.component';
import { TabularRepComponent } from './tabular-rep/tabular-rep.component';
import { PreperationFormComponent } from './preperation-form/preperation-form.component';
import { TabPaginationComponent } from './tab-pagination/tab-pagination.component';
import { LandingComponent } from './landing/landing.component';
import { ManagePlanComponent } from './manage-plan/manage-plan.component';
import { PlanPhaseComponent } from './plan-phase/plan-phase.component';

@NgModule({
  declarations: [						
    AppComponent,
    ProductsComponent,
      TabularRepComponent,
      PreperationFormComponent,
      TabPaginationComponent,
      LandingComponent,
      LoginComponent,
      ManagePlanComponent,
      PlanPhaseComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
     RouterModule.forRoot([
      { path: '', component: ManagePlanComponent },
      { path: 'products', component: ProductsComponent },
      {path:'planphase',component:PlanPhaseComponent},
      {path:'phase',component:TabularRepComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
