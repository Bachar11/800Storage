import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShimmerComponent } from '../shimmer/shimmer.component';



@NgModule({
  declarations: [ShimmerComponent],
  exports:[ShimmerComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
