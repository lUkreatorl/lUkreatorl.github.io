import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-finish-page',
  templateUrl: './app-finish-page.component.html',
  styleUrls: ['./app-finish-page.component.sass']
})
export class AppFinishPageComponent {
  timeSpent!: string;
  score!: number;
  difficulty!: number;
  count!: number; 

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.score = +params['score']; 
      this.timeSpent = params['timeSpent'];
      this.difficulty = +params['difficulty']; 
      this.count = +params['count']; 
    });
  }

  goHome(){
    this.router.navigate(['home']);
  }
}
