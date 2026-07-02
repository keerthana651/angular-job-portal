import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { JobService } from '../../services/job';
import { Job } from '../../models/job';

@Component({
  selector: 'app-edit-job',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-job.html',
  styleUrl: './edit-job.css'
})
export class EditJob implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private jobService = inject(JobService);

  job!: Job;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.jobService.getJob(id).subscribe(data => {
        this.job = data;
      });
    }
  }

  updateJob() {
    this.jobService.updateJob(this.job).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'job updated successfully',
        confirmButtonColor: '#16A34A'
      });
      this.router.navigate(['/jobs']);
    });
  }
}