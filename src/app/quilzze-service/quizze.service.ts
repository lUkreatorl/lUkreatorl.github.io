import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';
import { Quizze } from '../Models/quizze';

@Injectable({
  providedIn: 'root'
})
export class QuizzeService {

  private apiUrl = 'https://opentdb.com/api.php?amount=';

  quizzes: Quizze [] = [];
  constructor(private http: HttpClient) { }
  
  getInitQuizzes(): Observable<Quizze[]> {
    const observables: Observable<Quizze>[] = [];
    for (let index = 0; index < 10; index++) {
      const quizObservable = this.http.get<any>(this.apiUrl + this.getRnd(5, 20)).pipe(
        map((response: any) => {
          const quiz: Quizze = {
            Name: 'Random quizze №' + (index + 1),
            Questions: response.results
          };
          return quiz;
        })
      );
      observables.push(quizObservable);
    }

    return forkJoin(observables).pipe(
      map((quizzes: Quizze[]) => {
        this.quizzes = quizzes;
        return quizzes;
      })
    );
  }

  getQuizById(quizId: number): Quizze {
    return this.quizzes[quizId];
  }

  getRnd(min: number, max: number) : number {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}
