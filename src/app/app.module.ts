import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeComponent } from './employe/employe.component';
import { AppRoutingModule } from './app-routing.module';
import { CustComponent } from './cust/cust.component';
import { ProdComponent } from './prod/prod.component';
import { HomeComponent } from './home/home.component';
import { StatusComponent } from './status/status.component';
import { ComplaintComponent } from './complaint/complaint.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeComponent,
    CustComponent,
    ProdComponent,
    HomeComponent,
    StatusComponent,
    ComplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
