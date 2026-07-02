import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JobService } from '../../services/job';
import { Job } from '../../models/job';

@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './post-job.html',
  styleUrl: './post-job.css'
})
export class PostJob {

  private jobService = inject(JobService);
  private router = inject(Router);

  job: Job = {
    id: '',
    title: '',
    company: '',
    location: '',
    salary: '',
    experience: '',
    description: ''
  };

  submit() {
    this.jobService.addJob(this.job).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Application Submitted!',
        text: 'Job Posted Successfully',
        confirmButtonColor: '#2563EB'
      });
      this.router.navigate(['/jobs']);
    });
  }
}