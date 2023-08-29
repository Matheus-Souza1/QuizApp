import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizFinalComponent } from './quiz-final/quiz-final.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    QuizFinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
