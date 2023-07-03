import { Component, Input } from '@angular/core';
import { Question, Quizze } from '../Models/quizze';
import { QuizzeService } from '../quilzze-service/quizze.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  userAnswers!: Map<number, string>;
  startDate! : number;
  @Input() selectedAnswer: string | undefined;

  constructor(private route: ActivatedRoute,  private router: Router, private quizzeService: QuizzeService) { }

  ngOnInit() {
    const quizId = Number(this.route.snapshot.paramMap.get('id')); 
    this.quizze = this.quizzeService.getQuizById(quizId);
    this.initializeQuestion(0);
    this.startDate = Date.now();
    this.userAnswers = new Map<number, string>();
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

  exitQuizze(){
    this.router.navigate(['home']);
  }

  answerQuestion(qsNumb: number)
  {
    const selectedQuestion = this.quizze.Questions[qsNumb];

    if (this.selectedAnswer === selectedQuestion.correct_answer) {
      this.userAnswers.set(qsNumb, "correct");
    }
    else{
      this.userAnswers.set(qsNumb, "wrong");
    }

    let count = this.quizze.Questions.length;

    if((qsNumb + 1) < count && !this.userAnswers.has(qsNumb + 1))
    {
      this.changeQuestion(qsNumb + 1);
    }
    else
    {
      if(this.userAnswers.size === this.quizze.Questions.length)
      {
        this.finishQuiz();
      }
      else{
        for(let i = 0; i < count; i++ )
        {
          if(!this.userAnswers.has(i))
            {
              this.changeQuestion(i);
              break;
            }
        }
      } 
    }
  }

  finishQuiz() {
    let timeSpent = this.convertMsToTime(Date.now() - this.startDate)
    let score = this.calculateAnswers();
    let difficulty = this.calculateDifficulty();
    let count = this.quizze.Questions.length; 
    this.router.navigate(['finish'], { queryParams: { score, count, timeSpent, difficulty } });
  }

  padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }
  
  convertMsToTime(milliseconds: number) : string {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = minutes % 60;
  
    return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}:${this.padTo2Digits(
      seconds,
    )}`;
  }  

  calculateAnswers()
  {
    let count = 0;
    for (let result of this.userAnswers.values())
    {
      if(result === 'correct')
        count++;
    }

    return count;
  }

  calculateDifficulty(){
    
    let average = 0;
    
    for(let question of this.quizze.Questions)
    {
      if(question.difficulty === 'easy')
      {
        average += 1;
      }
      else if(question.difficulty === 'medium')
      {
        average += 2;
      }
      else{
        average += 3;
      }
    }
    
    let res = average / this.quizze.Questions.length;
    return res;
  }
}