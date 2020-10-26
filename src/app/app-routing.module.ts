import { MainComponent } from './main/main.component';
import { FormComponent } from './main/form/form.component';
import { SurveysComponent } from './main/surveys/surveys.component';
import { SurveyComponent } from './main/survey/survey.component';

import { SurveyDetailResolverService } from './services/survey-detail-resolver.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'form', component: FormComponent },
  { path: 'surveys', component: SurveysComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'survey/:id', component: SurveyComponent, resolve: { survey: SurveyDetailResolverService } },
  // redirect to /alpha if there is nothing in the url
  //{ path: '', pathMatch: 'full', redirectTo: '/main' },
  // the ** will catch anything that did not match any of the above routes
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
