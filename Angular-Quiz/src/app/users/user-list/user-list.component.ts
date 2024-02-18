import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models/user.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  totalUsers: number = 12;
  page: number = 1;
  limit: number = 6;
  loading: boolean = true;
  noDataFound: boolean = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
    const queryParam = this.route.snapshot.queryParamMap.get("page");
    if (queryParam) {
      this.page = parseInt(queryParam);
    }
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.loading = true;
    this.userService.getUsers(this.page).subscribe(
      (response: { data: User[], total: number }) => {
        // timeout added inorder to show placeholder shimmer because the api is very fast
        setTimeout(() => {
          this.loading = false;
          this.users = response.data;
          this.filteredUsers = this.users;
          this.totalUsers = response.total;
        }, 1000);
      }
    );
  }

  onSearch(query: string) {
    // check not empty
    if (query) {
      const searchUser = query.toLowerCase()
      this.filteredUsers = this.users.filter((user: User) =>
        user.first_name.toLowerCase().includes(searchUser) ||
        user.last_name.toLowerCase().includes(searchUser) ||
        user.email.toLowerCase().includes(searchUser) ||
        user.id.toString().includes(searchUser)
      );
    } else {
      this.filteredUsers = this.users;
    }
    this.noDataFound = this.filteredUsers.length == 0;
  }

  onPageChange(event: any) {
    this.page = (event.pageIndex + 1);
    this.router.navigate([], {
      queryParams: {
        page: this.page
      }
    });
    this.getUsers()
  }
}
