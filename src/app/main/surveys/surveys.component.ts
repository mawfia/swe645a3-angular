import { Component, OnInit, OnDestroy } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit, OnDestroy {
  surveys: Survey[] = [];

  subscription: Subscription;

  constructor(private _surveyService: SurveyService) { }

  ngOnInit(): void {

    $('title').text('List | Student Surveys');

    this.subscription = this._surveyService.surveysObservers.subscribe(
      (surveys:Survey[]) => { this.surveys = surveys; }
    )
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
