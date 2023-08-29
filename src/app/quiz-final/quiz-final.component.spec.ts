import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizFinalComponent } from './quiz-final.component';

describe('QuizFinalComponent', () => {
  let component: QuizFinalComponent;
  let fixture: ComponentFixture<QuizFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizFinalComponent]
    });
    fixture = TestBed.createComponent(QuizFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
