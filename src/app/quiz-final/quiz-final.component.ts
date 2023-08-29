import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-final',
  templateUrl: './quiz-final.component.html',
  styleUrls: ['./quiz-final.component.css']
})
export class QuizFinalComponent implements OnInit {
  public score = this.quizService.score;
  public count = this.quizService.count;

  constructor(private quizService: QuizService, private router: Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.router.navigate(['']);
  }
}
