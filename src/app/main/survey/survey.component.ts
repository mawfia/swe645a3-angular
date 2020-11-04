import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { Survey } from '../../models/survey';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  survey: Survey = null;

  constructor(private _surveyService: SurveyService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    $('link[rel="icon"]').attr("href",`./assets/favicon${Math.floor((Math.random()*5))}.png`);
    //this.f1(this.route.snapshot.data);

    /*this.route.data.subscribe(
        (data) => {
          if(data) {
            this.survey = data.survey;
            console.log(this.survey);
          }

      });*/
    //this.survey = this.route.snapshot.data;
    this.survey = this.route.snapshot.data.survey.success;
    $('title').text(`Survey ${this.survey.id} | ${this.survey.lastName}`);
    //Observable.of(this.survey).subscribe();

  }



}
