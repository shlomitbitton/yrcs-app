import { Component } from '@angular/core';
import {Sponsorship, SponsorshipService} from "../sponsorship.service";


@Component({
  selector: 'app-sponsorships',
  templateUrl: './sponsorships.component.html',
  styleUrl: './sponsorships.component.css'
})
export class SponsorshipsComponent {

  sponsorships: Sponsorship[] = [];

  constructor(private sponsorshipService: SponsorshipService) {}
  ngOnInit(): void {
    this.loadPrograms();
  }

  loadPrograms() {
    this.sponsorshipService.getSponsorships().subscribe({
      next: (data) => {
        this.sponsorships = data;
      },
      error: (error) => {
        console.error('Error fetching sponsorships:', error);
      }
    });
  }

  updateSponsorship(sponsor_name: string, program_name: string, amount: number, notes: string, sponsorshipId:number) {
    this.sponsorshipService.updateSponsorship(sponsor_name, program_name, amount, notes, sponsorshipId).subscribe({
      next: (response) => {
        console.log('Sponsorship updated:', response);
        alert('Sponsorship updated successfully');
        this.loadPrograms();
      },
      error: (error) => {
        console.error('Error updating sponsorship:', error);
        alert('Error updating sponsorship');
      }
    });
  }

}
