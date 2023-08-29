import { Component, OnInit } from '@angular/core';
import { IQuestion, QuizService } from '../quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  public questionIndex: number = 0;
  public questions: IQuestion[] = [];
  public timer: number = 180;


  public answers: any;

  constructor(private snackBar: MatSnackBar, private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions();
    this.questionTimer();
    this.renderCurrentQuestion();
  }

  renderCurrentQuestion() {
    if (this.questionIndex >= this.questions.length) {
      this.endQuiz()
    } else {
      this.timer = 180;
      this.answers = this.questions[this.questionIndex].answers;
    }


  }

  verifyAnswer(event: any) {
    if (event.currentTarget.innerText === this.questions[this.questionIndex].answer) {
      this.snackBar.open('Resposta correta!', undefined, {
        panelClass: ['correct'],
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 4000,
      });
      this.quizService.score++;
      setTimeout(() => this.nextQuestion(), 4000)
    }
    else {
      this.snackBar.open('Resposta errada!', undefined, {
        panelClass: ['incorrect'],
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 4000,
      });
      setTimeout(() => this.nextQuestion(), 4000)
    }
  }

  nextQuestion() {
    this.questionIndex += 1;
    this.renderCurrentQuestion();
  }

  endQuiz() {
    console.log('O quiz acabou, indo para próxima tela')
    this.router.navigate(['quiz/result'])
  }

  questionTimer() {
    setInterval(() => {
      if (this.timer <= 0) {
        this.nextQuestion();
      } else {
        this.timer--
      }
    }, 1000)
  }
}
