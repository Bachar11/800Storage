import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../user-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  Users: any[] = [];
  SearchByUser = "";
  filteredUsers: any[] = [];
  totalUsers = 12;
  page = 1;
  limit: number = 6;
  select: string = '';
  loading: boolean = true;

  constructor(private UserService: UserApiService, private route: ActivatedRoute, private router: Router) {
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
    this.UserService.getUsers(this.page).subscribe(
      (response: any) => {
        setTimeout(() => {
          this.loading = false;
          this.Users = response.data;
          this.filteredUsers = this.Users;
          this.totalUsers = response.total
        }, 1000);
      }
    );
  }

  onSearch(query: string) {
    this.SearchByUser = query;
    if (this.SearchByUser !== '') {
      const searchUser = this.SearchByUser.toLowerCase()
      this.filteredUsers = this.Users.filter(user =>
        user.first_name.toLowerCase().includes(searchUser) ||
        user.last_name.toLowerCase().includes(searchUser) ||
        user.email.toLowerCase().includes(searchUser) ||
        user.id.toString().includes(searchUser)
      );
      this.filteredUsers = this.filteredUsers.length > 0 ? this.filteredUsers : [{ noDataFound: true }];
    } else {
      this.filteredUsers = this.Users;
    }
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
