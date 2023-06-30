import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizzeService } from '../quilzze-service/quizze.service';
import { Quizze } from '../interfaces/quizze';

@Component({
  selector: 'app-home-page',
  templateUrl: './app-home-page.component.html',
  styleUrls: ['./app-home-page.component.sass']
})
export class AppHomePageComponent implements OnInit {

  isLoaded: boolean = false;
  quizzes!: Quizze[];

  constructor(private quizzeService: QuizzeService, private router: Router) {}

  ngOnInit() {
    this.quizzeService.getInitQuizzes().subscribe((data) => {
      
      this.quizzes = data;
      this.isLoaded = true;
    });
  }

  playQuizz(id: number){
    this.router.navigate(['play', id]);
  }
}