import { Component } from '@angular/core';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent {
  constructor() {}
  title='GMsoft';
  name: string = "";
  data:any[]=[];
  submit=(x:any)=>{
    this.data.push({name:x})
    //console.log(this.data)
    this.name='';
  }
  delete=(a:any)=>{
    var i = this.data.indexOf(a);
    this.data.splice(a,1)
  }

}
