import { Component ,Inject} from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

interface Food
{
value: string;
viewValue: string;
}

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent  {
  Student: any;
  form: FormGroup;
  constructor(private update:DataproviderService,public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb: FormBuilder){
      this.form = this.fb.group({
        enrollmentNo: [this.data.info.enrollmentNo, Validators.required],
        password: [this.data.info.password, Validators.required],
        name: [this.data.info.name, Validators.required],
        gender: [this.data.info.gender, Validators.required],
        dob: [this.data.info.dob, Validators.required],
        branch: [this.data.info.branch, Validators.required],
        contact: [this.data.info.contact, Validators.required],
        address: [this.data.info.address, Validators.required],
        city: [this.data.info.city, Validators.required],
        pinCode: [this.data.info.pinCode, Validators.required],
        securityKey: [this.data.info.securityKey, Validators.required],
        role: [this.data.info.role, Validators.required],
        email: [this.data.info.email, [Validators.required, Validators.email]]
      });
    }

  

  getdatabyid(id:any){
    this.update.getdatabyid(id).subscribe(
      (res: any)=>{
        console.log('Get all data response: ', res);
        this.Student=res;
      }
    )
  }
  updatebyid(){
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.update.updateuser(this.form.value).subscribe(
          (res: any)=>{
            console.log('Get all data response: ', res);
            // this.Student=res;
            this.dialogRef.close()
          }
        )
    
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
   
  }


  foods: Food[] = [
    {value: 'CSE', viewValue: 'CSE'},
    {value: 'IT', viewValue: 'IT'},
    {value: 'OTHER', viewValue: 'OTHER'},
  ];
}
