import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer } from 'rxjs';
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

   index(){
     this._http.get(`${environment.api}/surveys`).subscribe(
       (observer) => { this.surveysObservers.next(observer['surveys']); }
     )
   }

   happy(): any{
     return this._http.get(`${environment.api}/test1`);
   }

   show(id: string): any{
     return this._http.post<Survey>(`${environment.api}/survey`, {id: id});
   }
}
