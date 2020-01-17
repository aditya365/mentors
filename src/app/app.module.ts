import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MentorDashboardComponent } from './mentors/mentor-dashboard/mentor-dashboard.component';
import { MenteeListComponent } from './mentors/mentee-list/mentee-list.component';
import { MenteeListItemComponent } from './mentors/mentee-list/mentee-list-item/mentee-list-item.component';
import { MenteeDetailsComponent } from './mentors/mentee-details/mentee-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MentorDashboardNavComponent } from './mentors/mentor-dashboard/mentor-dashboard-nav/mentor-dashboard-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MentorDashboardComponent,
    MenteeListComponent,
    MenteeListItemComponent,
    MenteeDetailsComponent,
    HeaderComponent,
    FooterComponent,
    MentorDashboardNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
