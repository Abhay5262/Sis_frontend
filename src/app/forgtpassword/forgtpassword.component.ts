import { Component } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';
import { FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgtpassword',
  templateUrl: './forgtpassword.component.html',
  styleUrls: ['./forgtpassword.component.css']
})
export class ForgtpasswordComponent {
  regForm: any;
  flag:boolean=false;
  constructor(private data:DataproviderService,private fb: FormBuilder, private datePipe: DatePipe,private rout:Router){
    this.regForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      dob: ['', Validators.required]
    });
  }

data1(){
  this.regForm.value.dob = this.datePipe.transform(this.regForm.value.dob, 'yyyy-MM-dd');
  this.data.getlink(this.regForm.value.email,this.regForm.value.dob).subscribe({
    next:(data:any)=>{
      alert(data);
    }
  })
}


  submitForm(){
    this.regForm.value.dob = this.datePipe.transform(this.regForm.value.dob, 'yyyy-MM-dd');
    this.data.forgetpassword(this.regForm.value.email,this.regForm.value.dob).subscribe({
      next: (data: any) => {
        this.flag=true;
        alert(data);
  }}
)
  }
verifyOtp(otp:any)
  {
    this.data.verifyotp(this.regForm.value.email,otp).subscribe
    ({
        next:(resp)=>
          {
            
            alert(resp)
            this.rout.navigate(['/updatepassword',this.regForm.value.email])

            if (resp ) {
              
            } else {
              
            }
 
          },
          error:(resp)=>{console.log(resp)}
      })
  }
}