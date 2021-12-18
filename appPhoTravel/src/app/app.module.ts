import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MessageComponent } from './components/message/message.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PhotographerComponent } from './components/photographer/photographer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CookiesComponent } from './components/cookies/cookies.component';
import { PolicyPrivateComponent } from './components/policy-private/policy-private.component';
import { AboutComponent } from './components/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { ProfilePrivateComponent } from './components/profile-private/profile-private.component';
import { RegisterPhotographerComponent } from './components/register-photographer/register-photographer.component';
import { PhotographerPerfileComponent } from './components/photographer-perfile/photographer-perfile.component';
import { SearchComponent } from './components/search/search.component';
import { MapPhotogtapersComponent } from './components/map-photogtapers/map-photogtapers.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    MessageComponent,
    ProfileComponent,
    PhotographerComponent,
    CookiesComponent,
    PolicyPrivateComponent,
    AboutComponent,
    HeroComponent,
    MapComponent,
    ProfilePrivateComponent,
    RegisterPhotographerComponent,
    PhotographerPerfileComponent,
    SearchComponent,
    MapPhotogtapersComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
