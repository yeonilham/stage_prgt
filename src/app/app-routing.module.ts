import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeComponent } from './employe/employe.component';
import { CustComponent } from './cust/cust.component';
import { ProdComponent } from './prod/prod.component';
import { StatusComponent } from './status/status.component';
import { ComplaintComponent } from './complaint/complaint.component';

const routes: Routes =[
  { path: '', component:HomeComponent},
  { path:'Employe',component:EmployeComponent},
  { path:'custumer',component:CustComponent},
  { path:'prod',component:ProdComponent},
  { path:'status',component:StatusComponent},
  { path:'complaint',component:ComplaintComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
