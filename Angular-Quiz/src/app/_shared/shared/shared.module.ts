import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShimmerComponent } from '../shimmer/shimmer.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [ShimmerComponent, HeaderComponent],
  exports: [ShimmerComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FormsModule
  ]
})
export class SharedModule { }
