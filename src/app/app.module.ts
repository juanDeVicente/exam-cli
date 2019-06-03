import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuestionComponent } from './question/question.component';
import {QuestionService} from './servicies/question.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QuestionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
      QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
