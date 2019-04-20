// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { SurveyListComponent } from './pages/survey-operations/survey-list/survey-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import {ProfileComponent} from './pages/profile/profile.component';

// Services
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import {
  JwtModule,
  JwtHelperService,
  JwtInterceptor
} from '@auth0/angular-jwt';

// Route Guards
import { AuthGuard } from './guards/auth.guard';
// import { SurveyListComponent } from './survey-operations/survey-list/survey-list.component';
import { SurveyComponent } from './pages/survey-operations/survey/survey.component';
//import { ProfileComponent } from './pages/profile/profile.component';
import { from } from 'rxjs';
import { SurveySiteComponent } from './pages/survey-site/survey-site.component';

export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    HomeComponent,
    AboutComponent,
    PageNotFoundComponent,
    RegisterComponent,
    LoginComponent,
    DetailsComponent,
    SurveyListComponent,
    SurveyComponent,
    ProfileComponent,
    SurveySiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}