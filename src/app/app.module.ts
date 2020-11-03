import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TeamMemberComponent } from './team-member/team-member.component';
import { ContactComponent } from './contact/contact.component';
import { GoalsComponent } from './goals/goals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupScreenComponent } from './popup-screen/popup-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    NavigationBarComponent,
    AboutUsComponent,
    OurServicesComponent,
    TeamMemberComponent,
    ContactComponent,
    GoalsComponent,
    PopupScreenComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
