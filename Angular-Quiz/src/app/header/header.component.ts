import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  SearchByUser = "";
  @Input() hideSearchbar: boolean = false;
  @Output() Search: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) { }
  search() {
    this.Search.emit(this.SearchByUser);
  }
}
