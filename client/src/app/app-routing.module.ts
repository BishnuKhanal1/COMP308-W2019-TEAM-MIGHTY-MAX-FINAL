// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SurveyListComponent } from './pages/survey-operations/survey-list/survey-list.component';
import {SurveyComponent} from './pages/survey-operations/survey/survey.component';
import { SurveySiteComponent } from './pages/survey-site/survey-site.component';
import {ProfileComponent} from './pages/profile/profile.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'details', component: DetailsComponent, data: {title: 'Details'}},
  {path: 'profile/:id', component: ProfileComponent, data: {title: 'Profile'}, canActivate: [AuthGuard]},


  {path: 'surveys', component: SurveyListComponent, data: {title: 'Surveys made by users'}},
  {path: 'surveys/add', component: SurveySiteComponent, data: {title: 'Add a Survey'}, canActivate: [AuthGuard]},
  {path: 'surveys/survey/:id', component: SurveyComponent},


  {path: 'register', component: RegisterComponent, data: {title: 'Register'}},
  {path: 'login', component: LoginComponent, data: {title: 'Register'}},
  {path: 'logout', redirectTo: '/login', pathMatch: 'full'},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
