import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormComponent } from './main/form/form.component';
import { SurveysComponent } from './main/surveys/surveys.component';
import { SurveyComponent } from './main/survey/survey.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SurveyService } from './services/survey.service';

import { Like } from './pipes/like.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FormComponent,
    SurveysComponent,
    SurveyComponent,
    Like
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
