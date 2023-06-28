import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { AppPlayPageComponent } from './app-play-page/app-play-page.component';


const routes: Routes = [
  { path: '', component: AppHomePageComponent },
  { path: 'home', component: AppHomePageComponent },
  { path: 'play', component: AppPlayPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
