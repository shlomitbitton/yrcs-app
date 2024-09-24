import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Sponsor {
  sponsor_id: number;
  name: string;
  contact_person: string;
  email: string;
  phone_number: string;
  address: string;
  sponsor_type: string;
  notes: string;
}

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private apiUrl = 'http://localhost:3000/api/sponsors'; // Backend URL

  constructor(private http: HttpClient) {}

  getSponsors(): Observable<Sponsor[]> {
    return this.http.get<Sponsor[]>(this.apiUrl);
  }
}
