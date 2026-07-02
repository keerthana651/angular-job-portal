import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Jobs } from './pages/jobs/jobs';
import { JobDetails } from './pages/job-details/job-details';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { PostJob } from './pages/post-job/post-job';
import { EditJob } from './pages/edit-job/edit-job';
import { Profile } from './pages/profile/profile';
import { MyApplications } from './pages/my-applications/my-applications';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'jobs', component: Jobs },
  { path: 'job-details/:id', component: JobDetails },
  { path: 'post-job', component: PostJob },
  { path: 'edit-job/:id', component: EditJob },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'profile', component: Profile },
  { path: 'applications', component: MyApplications },
  { path: 'admin', component: AdminDashboard },
  { path: '**', redirectTo: '' }
];