import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../_services/question.service';
import { Question } from './question';
import { Answer } from '../answer/answer';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '../_services/answer.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  id: number;
  question: Question;
  answers: Answer[];
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
    this.getAnswersList();

   
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.canEdit = this.roles.includes('ROLE_ADMIN') ||
          this.roles.includes('ROLE_MODERATOR') ||
          user.username === this.question.createdBy;
    }
  }

  private get() {
    this.questionService.get(this.id).subscribe(data => {
      this.question = data;
    });
  }

  private getAnswersList() {
    let API_URL = 'http://localhost:9192/answers/';
    console.log(`In question.component.ts#getByQuestion: ${API_URL}?id=${this.id}`);
    this.answerService.getByQuestion(this.id).subscribe(data => {
      this.answers = data;
    });
  }

  questionEdit(id: number) {
    this.router.navigate((['questionUpdate', id]))
  }

  goToQuestionList(){
    this.router.navigate(['/questionList']);
  }

  questionDelete(id: number){
    this.questionService.deleteQuestion(id).subscribe( data => {
      console.log(data);
      this.goToQuestionList();
    })
  }

  answerCreate(id: number){
    this.router.navigate((['answerCreate', id]))
  }

  answerDetails(id: number) {
    this.router.navigate((['answer', id]))
  }
}
