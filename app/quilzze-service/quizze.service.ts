import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { Quizze } from '../interfaces/quizze';

@Injectable({
  providedIn: 'root'
})
export class QuizzeService {

  private apiUrl = 'https://opentdb.com/api.php?amount=';

  constructor(private http: HttpClient) { }
  
  getInitQuizzes(): Observable<Quizze[]> {
    const quizzesObservables: Observable<Quizze>[] = [];

    for (let index = 0; index < 10; index++) {
      const quizObservable = this.http.get<any>(this.apiUrl + this.getRnd(5, 20)).pipe(
        map((response: any) => {
          const quiz: Quizze = {
            Name: 'Random quizze №' + (index + 1), // Set the name of the quiz based on the response or leave it empty
            Questions: response.results
          };
          return quiz;
        })
      );
      quizzesObservables.push(quizObservable);
    }

    return forkJoin(quizzesObservables);
  }

  getRnd(min: number, max: number) : number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}
