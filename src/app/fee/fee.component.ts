import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataproviderService } from '../services/dataprovider.service';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css']
})
export class FeeComponent {
regForm: any;
constructor(private fb:FormBuilder,public data:DataproviderService){
  this.regForm = this.fb.group({
    id: ['', [Validators.required,]],
    enrollmentNo: ['', [Validators.required,]],
    feeamount:['',[Validators.required]],
    dueDate:['',[Validators.required]],
    updatedby:['',[Validators.required]],
    updatedDate:['',[Validators.required]],
  
  }) 
  }
  postdata(){
    this.data.feeadd(this.regForm.value).subscribe(
      (res:any)=>{
      console.log(res);
      alert(res)
    })
  }
}

