import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginRequest } from 'src/app/model/interface/auth';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials:LoginRequest={EmailId:'',Password:''};
  errorMessage='';
 

 private authService=inject(AuthService);
 private router=inject(Router);
 private messageService=inject(MessageService)

 onLogin(){
  this.authService.login(this.credentials).subscribe(response=>{
     if(response.result){
      localStorage.setItem('token',response.data.token);
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You Loggedin Successfully' });

      this.router.navigate(['/homepage'])
     }else{
      this.errorMessage='LoginFailed';
      console.log(response.message);
     }

  },
  error=>{
    console.log(error);
  }
)
 }
}
