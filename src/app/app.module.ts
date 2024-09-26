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

@NgModule({
  declarations: [
    AppComponent,
    SponsorListComponent,
    ProgramListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProgramService, SponsorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
