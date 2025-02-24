import { Component, inject, OnInit } from '@angular/core';
import { ApiResponsemodel, User } from 'src/app/model/interface/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit{
  users:User[]=[];
  loading:boolean=true;

  private userService= inject(UserService);

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (res:ApiResponsemodel) => {
        this.users=res.data;
        this.loading = false;
        console.log(this.users)
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.loading = false;
      }
    })
  }

}
