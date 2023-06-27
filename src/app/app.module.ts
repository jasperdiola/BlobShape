import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxAnimationComponent } from './Animation/box-animation/box-animation.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { LoginRegistrationComponent } from './Form/login-registration/login-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxAnimationComponent,
    HeaderComponent,
    FooterComponent,
    LoginRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
