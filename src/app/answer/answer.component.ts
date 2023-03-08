import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../_services/question.service';
import { Question } from '../question/question';
import { Answer } from '../answer/answer';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '../_services/answer.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  id: number;
  questionID: number;
  answer: Answer = new Answer;
  canEdit = false;
  isLoggedIn = false;
  private roles: string[] = [];

  constructor(
    private questionService: QuestionService,  
    private route: ActivatedRoute, 
    private answerService: AnswerService,
    private storageService: StorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.get();

    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.canEdit = this.roles.includes('ROLE_ADMIN') ||
          this.roles.includes('ROLE_MODERATOR') ||
          user.username === this.answer.createdBy;
    }
  }

  private get() {
    this.answerService.get(this.id).subscribe(data => {
      this.answer = data;
      this.questionID = this.answer.question.id;
    });
  }

  answerEdit(id: number) {
    this.router.navigate((['answerUpdate', id]))
  }

  goToQuestionList(){
    this.router.navigate(['questionList']);
  }

  goToQuestion(id: number){
    this.router.navigate((['question', id]));
  }

  answerDelete(id: number){
    this.answerService.deleteAnswer(id).subscribe( data => {
      console.log(data);
    })
    this.goToQuestion(this.questionID) 
  }

  answerDetails(id: number) {
    this.router.navigate((['answer', id]))
  }
}
