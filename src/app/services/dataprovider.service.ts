import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class DataproviderService  {
  // private baseurl="http://localhost:8080/";
  private authurl="http://localhost:8090/auth/login"
  private getalljwt="http://localhost:8090/admin/";
  private getuserbyid="http://localhost:8090/admin/getUser/"
  private forgotpassword="http://localhost:8090/auth/forgot/"
  private updatepass ="http://localhost:8090/admin/updateAdmin"
  private verified="http://localhost:8090/auth/verify/"
  private register="http://localhost:8090/admin/register"
  private getemaildata="http://localhost:8090/auth/getData"
  private updateuer="http://localhost:8090/admin/updateUser/"
  private delteuser="http://localhost:8090/admin/deleteUser/"
  private templink="http://localhost:8090/auth/tempurl/"
  private registeruser="http://localhost:8090/user/register"

  constructor(private http:HttpClient) {}
  // getdata(){
  //   return this.http.get(this.baseurl+'getall');
  // }
  savedata(post:any){
    return this.http.post(this.register,post,{responseType:'text'});
  }
  getdatabyid(id:any){
    return this.http.get(this.getuserbyid+id,{responseType:'json'} );
  }
  updatedata(data:any){
    console.log("service data",data);
    return this.http.post(this.updatepass,data,{responseType:'text'});
  }
  // deleteuserbyid(id:any){
  //   return this.http.delete(this.baseurl + "deleteuserbyid/"+id,{responseType:'text'});
  // }
  login(post:any){
    console.log(post)
    return this.http.post(this.authurl,post,{responseType:"json"});
  }
  getalljwtdata(){ 
    return this.http.get(this.getalljwt+'getallUsers');
  }
  forgetpassword(email:any,dob:any){
    return this.http.post(this.forgotpassword+email+'/'+dob,null,{responseType:'text'})
  }
  verifyotp(email:any,otp:any){
    return this.http.post(this.verified+email+'/'+otp,null,{responseType:'text'})
  }
  getemail(email:any){
    return this.http.post(this.getemaildata+'/'+email,null)
  }
  updateuser(post:any){
    return this.http.post(this.updateuer,post,{responseType:'text'})
  }
  deleteuser(id:any){
    return this.http.post(this.delteuser+id,null,{responseType:'text'})
  }
  getlink(email:any,dob:any){
    return this.http.post(this.templink+email+'/'+dob,null,{responseType:'text'})
  }
  registerdata(post:any){
    return this.http.post(this.registeruser,post,{responseType:'text'})
  }
}
