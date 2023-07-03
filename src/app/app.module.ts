import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomePageComponent } from './app-home-page/app-home-page.component';
import { AppPlayPageComponent } from './app-play-page/app-play-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppFinishPageComponent } from './app-finish-page/app-finish-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomePageComponent,
    AppPlayPageComponent,
    AppFinishPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
