import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisesComponent } from './exercises.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex7Component } from './ex7/ex7.component';


@NgModule({
  declarations: [ExercisesComponent, Ex3Component, Ex7Component],
  imports: [
    CommonModule,
    ExercisesRoutingModule,FormsModule
  ]
})
export class ExercisesModule { }
