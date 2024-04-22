import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GetalldataComponent } from './getalldata/getalldata.component';
import { GetdatabyidComponent } from './getdatabyid/getdatabyid.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GetallbyjwtComponent } from './getallbyjwt/getallbyjwt.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForgtpasswordComponent } from './forgtpassword/forgtpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { VerifyComponent } from './verify/verify.component';
import { TemplinkComponent } from './templink/templink.component';
import { UserregisterComponent } from './userregister/userregister.component';

const routes: Routes = [
  {
    path: '',
    component:LoginComponent,
    
  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  {
    path: 'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch: "full"
  },
  {
    path:'all',
    component:GetalldataComponent,
    pathMatch:"full"
  },
  {
    path:'getdatabyid',
    component:GetdatabyidComponent,
    pathMatch: "full",
  },
  {
    path:'update',
    component:UpdateComponent,
    pathMatch:'full',
    children:[
      {
        path:'update/**',
        component:UpdateComponent,
        pathMatch:'full'
      }
    ]
  },
  {
    path:'delete',
    component:DeleteComponent,
    pathMatch:'full'
  },
  {
    path:'getallbyjwt',
    component:GetallbyjwtComponent,
    pathMatch:'full'
  },
  {
    path:'getalldata',
    component:GetalldataComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:AdminComponent,
    pathMatch:'full',
  },
  {
    path:'user',
    component:UserComponent,
    pathMatch:'full'
  },
  {
    path:'forgtpassword',
    component:ForgtpasswordComponent,
    pathMatch:'full'
  },
  {
    path:'updatepassword/:email',
    component:UpdatepasswordComponent,
    pathMatch:'full'
  },
  {
    path:"verify/:email",
    component:VerifyComponent,
    pathMatch:'full'
  },
  {
    path:"templink/:email",
    component:TemplinkComponent,
    pathMatch:'full'
  },
  {
    path:"userregister",
    component:UserregisterComponent,
    pathMatch:'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
