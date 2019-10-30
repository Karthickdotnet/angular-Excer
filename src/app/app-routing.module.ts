import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'users-list', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) }, { path: 'exercises-list', loadChildren: () => import('../exercises/exercises.module').then(m => m.ExercisesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
