import { Component } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-templink',
  templateUrl: './templink.component.html',
  styleUrls: ['./templink.component.css']
})
export class TemplinkComponent {
  regForm: any;
  flag:boolean=false;
  constructor(private data:DataproviderService,private fb: FormBuilder, private datePipe: DatePipe,private rout:Router){
    this.regForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required],
      password:['',[Validators.required,]]
    });
  }
  submitForm(){
    let payload={
      "email": this.regForm.value.email,
      "dob":this.regForm.value.dob,
      "password": this.regForm.value.password
    }
 
    console.log(payload);

    this.data.updatedata(payload).subscribe(
      (data:any)=>{
        console.log(data)
        alert(data)
      }
    )
 
  }
}
