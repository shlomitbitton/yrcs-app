import {Program, ProgramService} from "../program.service";
import {Component, OnInit} from "@angular/core";
import {Sponsor} from "../sponsor.service";

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrl: './program-list.component.css'
})
export class ProgramListComponent implements OnInit {
  programs: Program[] = [];

  constructor(private programService: ProgramService) {}

  ngOnInit() {
    this.loadPrograms();
  }

  loadPrograms() {
    this.programService.getPrograms().subscribe({
      next: (data) => {
        this.programs = data;
      },
      error: (error) => {
        console.error('Error fetching programs:', error);
      }
    });
  }

  updateProgram(name: string, host_class: string, estimated_income: number, event_date: string, programId: number) {
    this.programService.updateProgram(name,host_class, estimated_income, event_date, programId).subscribe({
      next: (response) => {
        console.log('Program updated:', response);
        alert('Program updated successfully');
        this.loadPrograms(); // Refresh the list
      },
      error: (error) => {
        console.error('Error updating program:', error);
        alert('Error updating program');
      }
    });
  }
}
