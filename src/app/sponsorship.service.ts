import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Sponsorship {
  sponsorship_id: number;
  sponsor_name: string;
  program_name: string;
  amount: number;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})

export class SponsorshipService {
  private apiUrl = 'http://localhost:3000/api/sponsorships'; // Backend URL



  constructor(private http: HttpClient) {}

  getSponsorships(): Observable<Sponsorship[]> {
    return this.http.get<Sponsorship[]>(this.apiUrl);
  }

  updateSponsorship(sponsor_name: string, program_name: string, amount: number, notes: string, sponsorshipId:number):Observable<any>{
    return this.http.put(`${this.apiUrl}/${sponsorshipId}`, { sponsor_name, program_name, amount, notes, sponsorshipId });
  }
}
