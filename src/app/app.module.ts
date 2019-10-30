import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {
  MatToolbarModule,MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';
  
import {UsersRoutingModule} from '../users/users-routing.module';
import {ExercisesRoutingModule} from '../exercises/exercises-routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatTabsModule,ExercisesRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,UsersRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
