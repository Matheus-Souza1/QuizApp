import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { QuizFinalComponent } from './quiz-final/quiz-final.component';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent
  },
  {
    path: 'quiz/result',
    component: QuizFinalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
