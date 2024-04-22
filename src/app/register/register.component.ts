import { Component } from '@angular/core';
import { Data } from '../data';
import { DataproviderService } from '../services/dataprovider.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';



interface Food
 {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm: any;
  constructor(private save:DataproviderService,private sncakbar:MatSnackBar,private router:Router,private fb:FormBuilder){
    this.regForm = this.fb.group({
      id: ['', [Validators.required,]],
      password:['',[Validators.required]],
      name: ['', [Validators.required,]],
      dob: ['', Validators.required],
      // branch: ['', [Validators.required,]],
      gender: ['', [Validators.required,]],
      contact: ['', [Validators.required,]],
      address: ['', [Validators.required,]],
      city: ['', [Validators.required,]],
      pincode: ['', [Validators.required,]],
      securitykey: ['', [Validators.required,]],
      role: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  postdata(post:any){
    this.regForm.value.role='ROLE_ADMIN'
    this.save.savedata(post).subscribe(
      (res)=>{
        console.log("Data Saved Successfully",res,{ResponseType:"text"});
        alert(res)
        // window.location.reload();
          this.router.navigate(['/login'])
      }
    )
  }

  showdata(form:any){
    let data=new Data(form.firstname,form.lastname,form.gender,form.contact,form.date,form.address,form.branch,form.email,form.password);
    console.log(data)
  }
 foods: Food[] = [
    {value: 'CSE', viewValue: 'CSE'},
    {value: 'IT', viewValue: 'IT'},
    {value: 'OTHER', viewValue: 'OTHER'},
  ];
  
  }

