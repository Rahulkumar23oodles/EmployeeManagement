import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { HomepageComponent } from './Component/homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './Services/auth.service';
import { authGuard } from './Gaurds/auth.guard';
import { AuthInterceptor } from './Interceptor/auth.interceptor';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { UsersComponent } from './Component/users/users.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ClientComponent } from './Component/client/client.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    NavbarComponent,
    UsersComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastModule,
  ],
  exports: [NavbarComponent],
  providers: [AuthService,ConfirmationService,MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
