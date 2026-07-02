import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { JobService } from '../../services/job';
import { Job } from '../../models/job';
import { JobCard } from '../../components/job-card/job-card';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule, JobCard],
  templateUrl: './jobs.html',
  styleUrl: './jobs.css'
})
export class Jobs implements OnInit {

  private jobService = inject(JobService);

  jobs: Job[] = [];
  filteredJobs: Job[] = [];
  searchText = '';
  loading = false;

  ngOnInit(): void {
    this.loadJobs();
  }

  loadJobs() {
    this.loading = true;

    this.jobService.getJobs().subscribe({
      next: (data) => {
        this.jobs = data;
        this.filteredJobs = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  searchJobs() {
    const search = this.searchText.toLowerCase();

    this.filteredJobs = this.jobs.filter(job =>
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.location.toLowerCase().includes(search) ||
      job.experience.toLowerCase().includes(search)
    );
  }

  deleteJob(id: string) {
    Swal.fire({
      title: 'Delete Job?',
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, Delete'
    }).then((result) => {

      if (result.isConfirmed) {

        this.jobService.deleteJob(id).subscribe(() => {

          this.loadJobs();

          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Job deleted successfully.'
          });

        });

      }

    });
  }
}