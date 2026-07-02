import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { ApplicationService } from '../../services/application';
import { Application } from '../../models/application';

@Component({
  selector: 'app-my-applications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-applications.html',
  styleUrl: './my-applications.css'
})
export class MyApplications implements OnInit {

  private applicationService = inject(ApplicationService);

  applications: Application[] = [];

  ngOnInit(): void {
    this.loadApplications();
  }

  loadApplications() {
    this.applicationService.getApplications().subscribe(data => {
      this.applications = data;
    });
  }

  deleteApplication(id: string) {

  Swal.fire({
    title: 'Delete Application?',
    text: 'This action cannot be undone.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#dc3545',
    cancelButtonColor: '#6c757d',
    confirmButtonText: 'Yes, Delete',
    cancelButtonText: 'Cancel'
  }).then((result) => {

    if (result.isConfirmed) {

      this.applicationService.deleteApplication(id).subscribe({

        next: () => {

          this.loadApplications();

          Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Application deleted successfully.',
            confirmButtonColor: '#16A34A'
          });

        },

        error: () => {

          Swal.fire({
            icon: 'error',
            title: 'Delete Failed',
            text: 'Unable to delete the application.',
            confirmButtonColor: '#dc3545'
          });

        }

      });

    }

  });

}
}