import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { DataproviderService } from './services/dataprovider.service';
import { GetalldataComponent } from './getalldata/getalldata.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


import { GetdatabyidComponent } from './getdatabyid/getdatabyid.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { GetallbyjwtComponent } from './getallbyjwt/getallbyjwt.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { ForgtpasswordComponent } from './forgtpassword/forgtpassword.component';
import { UpdatepasswordComponent } from './updatepassword/updatepassword.component';
import { DatePipe } from '@angular/common';
import { VerifyComponent } from './verify/verify.component';
import { TemplinkComponent } from './templink/templink.component';
import { DialogComponent } from './dialog/dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UserregisterComponent } from './userregister/userregister.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,
    LoginComponent,
    GetalldataComponent,
    GetdatabyidComponent,
    UpdateComponent,
    DeleteComponent,
    GetallbyjwtComponent,
    AdminComponent,
    UserComponent,
    ForgtpasswordComponent,
    UpdatepasswordComponent,
    VerifyComponent,
    TemplinkComponent,
    DialogComponent,
    UserregisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgbModule,
    FormsModule,
    MatSelectModule,
    MatRadioModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,
  



 
    
  ],
  providers: [DataproviderService,HttpClientModule,authInterceptorProviders,  DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
