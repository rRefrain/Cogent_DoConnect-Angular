import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../_services/question.service';
import { Question } from '../question/question';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {

  
  question: Question = new Question();
  constructor(private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.question = new Question;

  }

  onSubmit(){
    console.log(JSON.stringify(this.question));
    this.SaveQuestion();
  }

   SaveQuestion(){
    this.questionService.createQuestion(this.question).subscribe( data =>{
      console.log(data);
      this.goToQuestionList();
    },
    error => console.log(error));
  }

  goToQuestionList(){
    this.router.navigate(['/questionList']);
  }

}
