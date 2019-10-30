import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ExercisesComponent } from './exercises.component';
import { CommonModule } from '@angular/common';
import { Ex3Component } from './ex3/ex3.component';
import { Ex7Component } from './ex7/ex7.component';
import {
  MatToolbarModule,MatInputModule,MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';

const routes: Routes = [{ path: '', component: ExercisesComponent }];

@NgModule({
  declarations: [ExercisesComponent,Ex3Component,Ex7Component],
  imports: [FormsModule, MatButtonModule, MatIconModule,MatSelectModule,ReactiveFormsModule,MatCardModule,
    MatInputModule, CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule,ExercisesComponent,Ex3Component,Ex7Component]
})
export class ExercisesRoutingModule { }
