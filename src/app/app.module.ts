import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EventCreatePipe } from './pages/event-create.pipe';
import { EventDetailPipe } from './pages/event-detail.pipe';
import { EventListPipe } from './pages/event-list.pipe';
import { LoginPipe } from './pages/login.pipe';
import { ProfilePipe } from './pages/profile.pipe';
import { ResetPasswordPipe } from './pages/reset-password.pipe';
import { SignupPipe } from './pages/signup.pipe';

@NgModule({
  declarations: [AppComponent, EventCreatePipe, EventDetailPipe, EventListPipe, LoginPipe, ProfilePipe, ResetPasswordPipe, SignupPipe],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
