import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApplicationService } from '../../services/application';
import { JobService } from '../../services/job';
import { Job } from '../../models/job';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './job-details.html',
  styleUrl: './job-details.css'
})
export class JobDetails implements OnInit {

  private route = inject(ActivatedRoute);
  private jobService = inject(JobService);
  private applicationService = inject(ApplicationService);
  job?: Job;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.jobService.getJob(id).subscribe(data => {
        this.job = data;
      });
    }
  }
 applyJob() {

  if (!this.job) return;

  Swal.fire({
    title: 'Apply for this Job?',
    text: 'Do you want to submit your application?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#16A34A',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Yes, Apply',
    cancelButtonText: 'Cancel'
  }).then((result) => {

    if (result.isConfirmed && this.job) {

      this.applicationService.applyJob({

        jobId: this.job.id,
        jobTitle: this.job.title,
        company: this.job.company,
        applicantName: 'Keerthana',
        applicantEmail: 'keerthana@gmail.com'

      }).subscribe({

        next: () => {

          Swal.fire({
            icon: 'success',
            title: 'Application Submitted!',
            text: 'Your application has been submitted successfully.',
            confirmButtonColor: '#16A34A'
          });

        },

        error: () => {

          Swal.fire({
            icon: 'error',
            title: 'Submission Failed',
            text: 'Unable to submit your application. Please try again later.',
            confirmButtonColor: '#dc3545'
          });

        }

      });

    }

  });

}
}