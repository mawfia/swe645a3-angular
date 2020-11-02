import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { Observable, of, EMPTY, Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private _surveyService: SurveyService) { }

  ngOnInit(): void {

    this._surveyService.happy().subscribe( data => console.log(data));
  }

}
