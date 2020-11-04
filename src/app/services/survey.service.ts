import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from '../models/survey';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  surveysObservers: BehaviorSubject<any[]> = new BehaviorSubject([]);

  private httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

  constructor(private _http: HttpClient) {
      this.index();
   }

   index(): void{
     this._http.get(`${environment.api}/surveys`).subscribe(
       (observer: Observer<Survey[]>) => { this.surveysObservers.next(observer['surveys']); }
     )
   }

   create(survey: Survey): Observable<Survey>{
     return this._http.post<Survey>(`${environment.api}/create`, {survey: survey});
   }

   show(id: string): Observable<Survey>{
     return this._http.post<Survey>(`${environment.api}/survey`, {id: id});
   }
}
