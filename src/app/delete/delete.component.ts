import { Component } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';
interface Food
 {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
  Student: any;
constructor(private del:DataproviderService)  {}

  getdatabyid(id:any){
    this.del.getdatabyid(id).subscribe(
      (res: any)=>{
        console.log('Get all data response: ', res);
        this.Student=res;
      }
    )
  }
  delete(id:any){
    console.log(id);
    this.del.deleteuser(id).subscribe(
      (res:any)=>{
        this.Student='' ;
        console.log(res);
        alert(res);
      }
    )
  }

  foods: Food[] = [
    {value: 'CSE', viewValue: 'CSE'},
    {value: 'IT', viewValue: 'IT'},
    {value: 'OTHER', viewValue: 'OTHER'},
  ];
  
}
