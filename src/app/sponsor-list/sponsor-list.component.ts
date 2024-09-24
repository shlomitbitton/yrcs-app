import {Component, OnInit} from '@angular/core';
import {Sponsor, SponsorService} from "../sponsor.service";

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrl: './sponsor-list.component.css'
})
export class SponsorListComponent implements OnInit {
  sponsors: Sponsor[] = [];

  constructor(private sponsorService: SponsorService) {}

  ngOnInit(): void {
    this.sponsorService.getSponsors().subscribe((data) => {
      this.sponsors = data;
    });
  }
}
