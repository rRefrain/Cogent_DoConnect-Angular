import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../_services/question.service';
import { Question } from '../question/question';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-question-update',
  templateUrl: './question-update.component.html',
  styleUrls: ['./question-update.component.css']
})
export class QuestionUpdateComponent implements OnInit {

  id: number
  question: Question = new Question();
  constructor(private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.questionService.get(this.id).subscribe(data => {
      this.question = data;
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(JSON.stringify(this.question));
    this.UpdateQuestion();
  }

  UpdateQuestion(){
    this.questionService.updateQuestion(this.id, this.question).subscribe( data =>{
      console.log(data);
      this.goToQuestionList();
    },
    error => console.log(error));
  }

  goToQuestionList(){
    this.router.navigate(['/questionList']);
  }

}
