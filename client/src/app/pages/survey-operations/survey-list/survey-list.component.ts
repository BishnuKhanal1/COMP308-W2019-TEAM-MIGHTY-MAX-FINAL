import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/models/survey';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[];

  constructor(
    private surveyService: SurveyService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.surveys = new Array<Survey>();
    this.displaySurveys();
  }

  displaySurveys(): void {
    this.surveyService.getSurveys().subscribe(content => {
      if (content.success) {
        this.surveys = content.surveys;
       } else {
         this.flashMessage.show('Could not load properly', {cssClass: 'alert-danger', timeOut: 5000});
       }
    });
  }
}
