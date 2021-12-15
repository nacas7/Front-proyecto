import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { PolicyPrivateComponent } from './components/policy-private/policy-private.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PhotographerComponent } from './components/photographer/photographer.component';
import { ProfilePrivateComponent } from './components/profile-private/profile-private.component';
import { RegisterPhotographerComponent } from './components/register-photographer/register-photographer.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'policy-private', component: PolicyPrivateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'photographer', component: PhotographerComponent },
  { path: 'register-photographer', component: RegisterPhotographerComponent },
  { path: 'logout', component: HomeComponent },
  { path: 'message', component: MessageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile-private', component: ProfilePrivateComponent },
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
