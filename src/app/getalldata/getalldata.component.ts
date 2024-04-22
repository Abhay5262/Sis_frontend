
import { Component, ViewChild } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-getalldata',
  templateUrl: './getalldata.component.html',
  styleUrls: ['./getalldata.component.css']
})
export class GetalldataComponent {
//   constructor(private data: DataproviderService) {}
// Student:any=''
//   getall(){
//     this.data.getdata().subscribe(
//       (res: any)=>{
//         console.log('Get all data response: ', res);
//         this.Student=res;
//       }
//     )
    
//   }


//paginator
datasource:any;
displaycolumns:string[]=['enrollmentNo','password','name','gender','dob','branch','city','pinCode','securityKey','role','email','Action']
@ViewChild(MatPaginator) paignation!:MatPaginator;
  userlist: any;
 
 
constructor(private api:DataproviderService,private dialog:MatDialog)
{
  this.getalldata();
}

openDialog(tmp:any): void {
  const dialogRef = this.dialog.open(UpdateComponent, {
    data: {info:tmp},
  });

  dialogRef.afterClosed().subscribe(result => {
   this.getalldata()
  });
}
deletedata(enrollmentNo:any){
  console.log(enrollmentNo);


  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      this.api.deleteuser(enrollmentNo).subscribe(
        (res:any)=>{
          
          Swal.fire({
            title: "Deleted!",
            text: res,
            icon: "success"
          });
          this.getalldata()
        }
      )
      
    }
  });
}

getalldata()
{
  this.api.getalljwtdata().subscribe((data)=>
  {
    this.userlist=data
    console.log('get all data',data);
    this.datasource=new MatTableDataSource<any>(this.userlist);
    console.log("Data Source--->" , this.datasource)
    this.datasource.paginator=this.paignation  
  }
)
}
}
