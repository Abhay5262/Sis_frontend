import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataproviderService } from '../services/dataprovider.service';
interface Food
 {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent {
  regForm: any;
  constructor(private save:DataproviderService,private router:Router,private fb:FormBuilder){
    this.regForm = this.fb.group({
      id: ['', [Validators.required,]],
      password:['',[Validators.required]],
      name: ['', [Validators.required,]],
      dob: ['', Validators.required],
      branch: ['', [Validators.required,]],
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
    this.regForm.value.role='ROLE_USER'
    this.save.registerdata(post).subscribe(
      (res)=>{
        console.log("Data Saved Successfully",res,{ResponseType:"text"});
        alert(res)
        // window.location.reload();
          this.router.navigate(['/login'])
      }
    )
}
foods: Food[] = [
  {value: 'CSE', viewValue: 'CSE'},
  {value: 'IT', viewValue: 'IT'},
  {value: 'OTHER', viewValue: 'OTHER'},
];
}
