import {ApplicationConfig, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { SponsorListComponent } from './sponsor-list/sponsor-list.component';
import {FormsModule} from "@angular/forms";
import { ProgramListComponent } from './program-list/program-list.component';
import {ProgramService} from "./program.service";
import {SponsorService} from "./sponsor.service";
import {SponsorshipService} from "./sponsorship.service";
import { SponsorshipsComponent } from './sponsorships/sponsorships.component';

@NgModule({
  declarations: [
    AppComponent,
    SponsorListComponent,
    ProgramListComponent,
    SponsorshipsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProgramService, SponsorService, SponsorshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
