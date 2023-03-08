
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from '../question/question';


@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  private API_URL = 'http://localhost:9192/questions';

  get(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.API_URL}/${id}`);
  }

  getQuestionList(): Observable<Question[]>{
    return this.http.get<Question[]>(`${this.API_URL}`);
  }

  createQuestion(question: Question): Observable<Object>{
    console.log(`${this.API_URL}`);
    console.log(JSON.stringify(question));
    return this.http.post(`${this.API_URL}`, question);
  }

  updateQuestion(id: number, question: Question): Observable<Object>{
    return this.http.put(`${this.API_URL}/${id}`, question);
  }

  deleteQuestion(id: number): Observable<Object>{
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
