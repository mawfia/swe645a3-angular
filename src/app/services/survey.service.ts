import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'Rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from '../models/survey'

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

   index(){
     this._http.get('http://localhost:3000/surveys').subscribe(
       (observer) => { this.surveysObservers.next(observer['surveys']); }
     )
   }

   show(id: string): any{
     return this._http.post<Survey>(`http://localhost:3000/survey`, {id: id});
   }
}
