import { Component, OnInit } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {
  uform: any;
  emailId: any;
  getData: any;

  constructor(private data:DataproviderService,private fb:FormBuilder,private route:ActivatedRoute,private rout:Router) { 
    this.uform=this.fb.group({
      password:['',[Validators.required,]],
      
    })
   
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (data:ParamMap)=>{
        this.emailId=data.get('email')
      })
      this.data.getemail(this.emailId).subscribe(
        (data:any)=>{
          this.getData=data;
          console.log(data)
        }
      )
}
  
  submitForm(){
    this.getData.password=this.uform.value.password
 
    console.log(this.getData);

    this.data.updatedata(this.getData).subscribe(
      (data:any)=>{
        console.log(data)
        alert(data)
        this.rout.navigate(['/login'])
      }
    )
 
  }
}
