import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: any;
  user: any;

  constructor(private userService: UserApiService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.userId = Number(userId);
    
    this.userService.getSingleUser(this.userId).subscribe((response: any) => {
      setTimeout(()=>{
        this.user = response.data;

      },1000)
    });
  }
}
