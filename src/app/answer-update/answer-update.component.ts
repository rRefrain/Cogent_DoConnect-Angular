import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../_services/answer.service';
import { Answer } from '../answer/answer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-answer-update',
  templateUrl: './answer-update.component.html',
  styleUrls: ['./answer-update.component.css']
})
export class AnswerUpdateComponent implements OnInit {

  id: number
  answer: Answer = new Answer();
  constructor(private answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.answerService.get(this.id).subscribe(data => {
      this.answer = data;
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(JSON.stringify(this.answer));
    this.UpdateAnswer();
  }

  UpdateAnswer(){
    this.answerService.updateAnswer(this.id, this.answer).subscribe( data =>{
      console.log(data);
      this.goToAnswerList();
    },
    error => console.log(error));
  }

  goToAnswerList(){
    this.router.navigate(['/question', this.answer.question.id]);
  }

}
