import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from  '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { MainComponent } from './main/main.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UserDetailsComponent } from './user-details/user-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LazyImgDirective } from './_directives/lazy-load.directive';
import { SharedModule } from './_shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    MainComponent,
    UserDetailsComponent,
    LazyImgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
