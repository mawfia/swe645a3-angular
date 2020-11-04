import { Component, OnInit, OnDestroy } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit, OnDestroy {
  surveys: Survey[] = [];

  subscription: Subscription;
  isLoading: boolean = false;

  constructor(private _surveyService: SurveyService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    $('title').text('List | Student Surveys');
    this.spinner.show();

    this.subscription = this._surveyService.surveysObservers.subscribe(
      (surveys:Survey[]) => { this.spinner.hide(); this.surveys = surveys; }
    )
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
