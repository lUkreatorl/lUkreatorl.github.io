import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private quizzeService: QuizzeService) {}

  ngOnInit() {
    this.quizzeService.getInitQuizzes().subscribe((data) => {
      
      this.quizzes = data;
      this.isLoaded = true;
    });
  }
}