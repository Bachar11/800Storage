import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchText = "";
  @Input() hideSearchbar: boolean = false;
  @Output() onSearchText: EventEmitter<string> = new EventEmitter<string>();
  private searchSubject: Subject<string> = new Subject<string>();

  constructor() {
    // avoid calling the update right away, give some buffer for the user to type their search input
    this.searchSubject.pipe(debounceTime(300)).subscribe(value => {
      this.onSearch();
    });
  }

  onInputChange() {
    this.searchSubject.next(this.searchText);
  }

  onSearch() {
    this.onSearchText.emit(this.searchText);
  }
}
