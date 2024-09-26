import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SponsorListComponent} from "./sponsor-list/sponsor-list.component";
import {ProgramListComponent} from "./program-list/program-list.component";
import {SponsorshipsComponent} from "./sponsorships/sponsorships.component";


const routes: Routes = [
  { path: 'app-sponsor-list', component: SponsorListComponent },
  { path: 'app-program-list', component: ProgramListComponent },
  { path: 'app-sponsorships-list', component: SponsorshipsComponent },
  { path: '', redirectTo: '/app-sponsor-list', pathMatch: 'full' }, // Optional: Redirect to a default path
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
