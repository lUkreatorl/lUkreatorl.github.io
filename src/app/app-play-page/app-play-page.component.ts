import { Component } from '@angular/core';
import { Question, Quizze } from '../interfaces/quizze';
import { QuizzeService } from '../quilzze-service/quizze.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play-page',
  templateUrl: './app-play-page.component.html',
  styleUrls: ['./app-play-page.component.sass']
})
export class AppPlayPageComponent {
  quizze!: Quizze;
  questionNumb: number = 0;
  gameqstn! : Question;
  qstnResponse!: string[];

  constructor(private route: ActivatedRoute, private quizzeService: QuizzeService) { }

  ngOnInit() {
    const quizId = Number(this.route.snapshot.paramMap.get('id')); 
    this.quizze = this.quizzeService.getQuizById(quizId);
    this.initializeQuestion(0);
  }

  changeQuestion(number: number){
    this.initializeQuestion(number);
  }

  initializeQuestion(numb: number){
    this.questionNumb = numb;
    this.gameqstn = this.quizze.Questions[numb];
    let answers = this.gameqstn.incorrect_answers.concat(this.gameqstn.correct_answer);

    this.qstnResponse = this.shuffle(answers);
  }

  shuffle(array: string[]) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
}