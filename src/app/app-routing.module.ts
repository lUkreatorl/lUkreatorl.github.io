import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { AppPlayPageComponent } from './app-play-page/app-play-page.component';
import { AppFinishPageComponent } from './app-finish-page/app-finish-page.component';


const routes: Routes = [
  { path: '', component: AppHomePageComponent },
  { path: 'home', component: AppHomePageComponent },
  { path: 'play/:id', component: AppPlayPageComponent },
  { path: 'finish', component: AppFinishPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
