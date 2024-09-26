import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Program {
  program_id: number;
  name: string;
  description: string;
  estimated_income: number;
  event_date: string ;
  estimated_budget: number;
  host_class: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  private apiUrl = 'http://localhost:3000/api/programs';

  constructor(private http: HttpClient) {}

  getPrograms(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateProgram(name: string, host_class: string,estimated_income: number, event_date: string, program_id: number ): Observable<any> {
    return this.http.put(`${this.apiUrl}/${program_id}`, { name, host_class, estimated_income, event_date, program_id  });
  }
}
