import { Component } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';

@Component({
  selector: 'app-getdatabyid',
  templateUrl: './getdatabyid.component.html',
  styleUrls: ['./getdatabyid.component.css']
})
export class GetdatabyidComponent {
  constructor(private id:DataproviderService){}
  Student:any[] = []
    getdatabyid(id:any){
      this.id.getdatabyid(id.value).subscribe(
        (res: any)=>{
          console.log('Get all data response: ', res);
          this.Student[0]=res;
        }
      )
    }
}
