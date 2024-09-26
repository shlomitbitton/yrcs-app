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
    this.loadPrograms();
    // this.sponsorService.getSponsors().subscribe((data) => {
    //   this.sponsors = data;
    // });
  }

  loadPrograms() {
    this.sponsorService.getSponsors().subscribe({
      next: (data) => {
        this.sponsors = data;
      },
      error: (error) => {
        console.error('Error fetching programs:', error);
      }
    });
  }



  updateSponsor(name: string, contact_person: string, email: string, phone_number: string, notes: string, sponsorId: number) {
    this.sponsorService.updateSponsor(name, contact_person, email, phone_number, notes, sponsorId).subscribe({
      next: (response) => {
        console.log('Sponsor updated:', response);
        alert('Sponsor updated successfully');
        this.loadPrograms();
      },
      error: (error) => {
        console.error('Error updating sponsor:', error);
        alert('Error updating sponsor');
      }
    });
  }

}
