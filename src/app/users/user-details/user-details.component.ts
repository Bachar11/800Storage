import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/user.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getSingleUser(Number(id)).subscribe((response: any) => {
        this.user = response.data;
    });
  }
}
