import { Component, OnInit, OnDestroy } from '@angular/core';
import { SurveyService } from '../../services/survey.service';
import { Observable, of, EMPTY, Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Survey } from '../../models/survey';
import { Likes } from '../../models/likes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  survey: Survey = new Survey();

  constructor(private _surveyService: SurveyService, private _router: Router) { }

  ngOnInit(): void {

    $('title').text('Form | Student Survey');
    $('link[rel="icon"]').attr("href",`./assets/favicon${Math.floor((Math.random()*5))}.png`);
  }

  create(survey:Survey): void{

    let convert: string = "";
    Object.values(this.survey.likeMost).forEach( (l,i) => convert += l ? 1 : 0);

    this.survey.likeMost = 0//parseInt(convert, 2) || 0;
    this.survey.referral = 0//parseInt(this.survey.referral, 10) || 1;
    this.survey.recommend = 0//{"Very Likely" : 0, "Likely" : 1, "Unlikely" : 2}[this.survey.recommend] || 1;
    this.survey.telephone = this.survey.telephone.replace(/[^\d]/gi, "");

    this._surveyService.create(this.survey).subscribe( (survey: Survey) => {
      if(survey) {
        this._surveyService.index();
        localStorage.setItem("submit", JSON.stringify(this.survey));
        this._router.navigate(['/']);
      }
    });
  }

  cancel():void{
    localStorage.setItem("cancel", "0");
    this._router.navigate(['/']);
  }

  ngOnDestroy(): void{
  }

}
