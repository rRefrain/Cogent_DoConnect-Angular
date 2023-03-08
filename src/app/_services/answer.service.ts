
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Answer } from '../answer/answer';


@Injectable({
  providedIn: 'root',
})
export class AnswerService {
  constructor(private http: HttpClient) {}

  private API_URL = 'http://localhost:9192/answers';

  get(id: number): Observable<Answer> {
    return this.http.get<Answer>(`${this.API_URL}/${id}`);
  }

  getAnswersList(): Observable<Answer[]>{
    return this.http.get<Answer[]>(`${this.API_URL}`);
  }

  getByQuestion(id: number): Observable<Answer[]>{
    return this.http.get<Answer[]>(`${this.API_URL}?id=${id}`);
  }

  createAnswer(answer: Answer): Observable<Object>{
    return this.http.post(`${this.API_URL}`, answer);
  }

  updateAnswer(id: number, answer: Answer): Observable<Object>{
    return this.http.put(`${this.API_URL}/${id}`, answer);
  }

  deleteAnswer(id: number): Observable<Object>{
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
