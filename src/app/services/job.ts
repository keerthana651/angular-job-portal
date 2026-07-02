import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private http = inject(HttpClient);

  private api = 'https://job-portal-api-alls.onrender.com/jobs';

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.api);
  }

  getJob(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.api}/${id}`);
  }

  addJob(job: Job) {
    return this.http.post(this.api, job);
  }

  updateJob(job: Job) {
    return this.http.put(`${this.api}/${job.id}`, job);
  }

  deleteJob(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
