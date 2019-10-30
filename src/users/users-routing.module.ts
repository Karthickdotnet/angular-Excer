import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

const routes: Routes = [{ path: '', component: UsersComponent }];

@NgModule({
  imports: [CommonModule,RouterModule.forChild(routes)],
  exports: [RouterModule, UsersComponent],
  declarations: [UsersComponent]
})
export class UsersRoutingModule { }
