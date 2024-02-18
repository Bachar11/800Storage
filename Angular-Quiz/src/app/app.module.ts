import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { SharedModule } from './_shared/shared/shared.module';
import { DefaultInterceptor } from './_interceptors/default.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LoadingBarRouterModule,
    LoadingBarModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
