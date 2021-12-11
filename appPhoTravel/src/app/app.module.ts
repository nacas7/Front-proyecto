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
// import { AgmMap } from '@agm/core';
// import { AgmCoreModule } from '@agm/core';
// import { GoogleMapsModule } from '@angular/google-maps';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // AgmMap,
    // GoogleMapsModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyD7sdzDGO3VARpKWBrEvA-8bG2UewlGwgE'
    // })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
