import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../_services/answer.service';
import { Answer } from '../answer/answer';
import { QuestionService } from '../_services/question.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-answer-create',
  templateUrl: './answer-create.component.html',
  styleUrls: ['./answer-create.component.css']
})
export class AnswerCreateComponent implements OnInit {

  id: number
  answer: Answer = new Answer();
  constructor(private answerService: AnswerService,
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.questionService.get(this.id).subscribe(data => {
      this.answer.question = data;
    });
  }

  onSubmit(){
    console.log(JSON.stringify(this.answer));
    this.CreateAnswer();
  }

  CreateAnswer(){
    this.answerService.createAnswer(this.answer).subscribe( data =>{
      console.log(data);
      this.goToAnswerList();
    },
    error => console.log(error));
  }

  goToAnswerList(){
    this.router.navigate(['/question', this.answer.question.id]);
  }

}
