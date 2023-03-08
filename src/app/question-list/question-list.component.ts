import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../_services/question.service';
import { Question } from '../question/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[];
  constructor(private questionService: QuestionService,
    private router: Router) { }

  ngOnInit(): void {
    this.getQuestionList();
  }

  private getQuestionList() {
    this.questionService.getQuestionList().subscribe(data => {
      this.questions = data;
    });
  }

  questionDetails(id: number){
    this.router.navigate((['question', id]))
  }
  /*
  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }*/

}
