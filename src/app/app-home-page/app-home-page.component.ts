import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzeService } from '../quilzze-service/quizze.service';
import { Quizze } from '../Models/quizze';

@Component({
  selector: 'app-home-page',
  templateUrl: './app-home-page.component.html',
  styleUrls: ['./app-home-page.component.sass']
})
export class AppHomePageComponent implements OnInit {

  isLoaded: boolean = false;
  quizzes!: Quizze[];
  randomQuiz!: number;

  constructor(private quizzeService: QuizzeService, private router: Router) {}

  ngOnInit() {
    this.quizzeService.getInitQuizzes().subscribe((data) => {
      this.quizzes = data;
      this.isLoaded = true;
    });

    this.randomQuiz = Math.floor((Math.random() * 9)); 
  }

  playQuizz(id: number){
    this.router.navigate(['play', id]);
  }
}