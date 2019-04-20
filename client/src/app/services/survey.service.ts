import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Survey } from '../models/survey';
import { SurveyAnswers } from '../models/survey-answers';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  private authToken: any = null;

  private endpoint = 'http://localhost:3000/api/surveys';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };

  constructor(private http: HttpClient) { }

  public getSurveys(): Observable<any> {
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  public addSurvey(survey: Survey): Observable<any> {
    this.loadToken();
    return this.http.post<any>(this.endpoint + '/add', survey, this.httpOptions);
  }

  public getSelectedSurvey(survey: Survey): Observable<any> {
    return this.http.get<any>(this.endpoint + '/survey/' + survey._id, this.httpOptions);
  }

  public collectSurveyAnswers(surveyAnswers: SurveyAnswers): Observable<any> {
    return this.http.post<any>(this.endpoint + '/survey/:id', surveyAnswers, this.httpOptions);
  }

  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }
}
