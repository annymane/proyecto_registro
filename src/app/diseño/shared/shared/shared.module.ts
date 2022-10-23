import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos
import {ReactiveFormsModule} from '@angular/forms';

//Angular Material siuuu 
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  exports: [
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule
  ]
})
export class SharedModule { }
