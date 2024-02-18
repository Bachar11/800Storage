import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Something went wrong. Please try again.`;
        } else {
          // Server-side errors
          errorMessage = `Something went wrong. Please try again.`;
        }
        this.snackBar.open(errorMessage, 'Close', {
          duration: 5000,
        });
        return throwError(errorMessage);
      })
    );
  }
}
