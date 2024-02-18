import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  Users: any[] = [];
  SearchByUser = "";
  filteredUsers: any[] = [];

  constructor() { }


  search() {
    if (this.SearchByUser !== '') {
      const searchUser = this.SearchByUser.toLowerCase()
      this.filteredUsers = this.Users.filter(user =>
        user.first_name.toLowerCase().includes(searchUser) ||
        user.last_name.toLowerCase().includes(searchUser) ||
        user.email.toLowerCase().includes(searchUser)
      );
    }else{
      this.filteredUsers = this.Users;

    }
}
}