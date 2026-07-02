// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { JobService } from '../../services/job';
// import { ApplicationService } from '../../services/application';

// @Component({
//   selector: 'app-admin-dashboard',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './admin-dashboard.html',
//   styleUrl: './admin-dashboard.css'
// })

// export class AdminDashboard {

//   totalJobs = 0;
//   totalApplications = 0;  
//   totalUsers = 10;

// }
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { JobService } from '../../services/job';
import { ApplicationService } from '../../services/application';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css'
})
export class AdminDashboard implements OnInit {

  private jobService = inject(JobService);
  private applicationService = inject(ApplicationService);

  totalJobs = 0;
  totalApplications = 0;
  totalUsers = 1; // Static for now

  ngOnInit(): void {

    this.jobService.getJobs().subscribe(data => {
      this.totalJobs = data.length;
    });

    this.applicationService.getApplications().subscribe(data => {
      this.totalApplications = data.length;
    });

  }

}