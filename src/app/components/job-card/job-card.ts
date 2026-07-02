import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-card.html',
  styleUrl: './job-card.css'
})
export class JobCard {

  @Input({ required: true }) job!: Job;

  @Output() delete = new EventEmitter<string>();

  onDelete() {
    this.delete.emit(this.job.id);
  }

}