import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

import { SurveyService } from './survey.service';

import { Survey } from '../models/survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyDetailResolverService implements Resolve<Survey>{

  constructor(private _surveyService: SurveyService, private _router: Router){ }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Survey> | Observable<never>{
    let id = route.paramMap.get('id');
      return this._surveyService.show(id).pipe(
      take(1),
      mergeMap(survey => {
        if (survey['success']) {
          return of(survey);
        } else { // id not found
          this._router.navigate(['/surveys']);
          return EMPTY;
        }
      })
    );
  }
}
