import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/models/survey';
import { SurveyAnswers } from 'src/app/models/survey-answers';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  title: string;
  survey: Survey;
  surveyAnswers: SurveyAnswers;

  constructor(
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private surveyService: SurveyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.survey = new Survey();
    this.surveyAnswers = new SurveyAnswers();

    this.activatedRoute.params.subscribe(param => {
      this.survey._id = param.id;
    });

    this.getSurvey(this.survey);
  }

  private getSurvey(survey: Survey): void {
    this.surveyService.getSelectedSurvey(survey).subscribe(content => {
      this.survey = content.survey;
    });
  }

  onSurveySubmit(): void {
    this.surveyService.collectSurveyAnswers(this.surveyAnswers).subscribe(content => {
      if (content.success) {
         console.log(content);
         this.flashMessage.show(content.msg, {cssClass: 'alert-success', timeOut: 5000});
         this.router.navigate(['/home']);
       } else {
         this.flashMessage.show('Unable to collect answers', {cssClass: 'alert-danger', timeOut: 5000});
         this.router.navigate(['/home']);
       }
    });
  }

}