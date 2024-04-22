import { Component } from '@angular/core';
import { DataproviderService } from '../services/dataprovider.service';

@Component({
  selector: 'app-getallbyjwt',
  templateUrl: './getallbyjwt.component.html',
  styleUrls: ['./getallbyjwt.component.css']
})
export class GetallbyjwtComponent {
  Student: any;
  constructor(private data:DataproviderService){}
  getall(){
    this.data.getalljwtdata().subscribe((res)=>{
      this.Student=res
      console.log("Get all by JWT Data : ", res);
  }
)
}
}
