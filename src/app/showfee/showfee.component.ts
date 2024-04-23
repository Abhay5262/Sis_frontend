import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataproviderService } from '../services/dataprovider.service';

@Component({
  selector: 'app-showfee',
  templateUrl: './showfee.component.html',
  styleUrls: ['./showfee.component.css']
})
export class ShowfeeComponent {
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
}
