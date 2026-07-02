import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from '../models/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private http = inject(HttpClient);

  private api = 'https://job-portal-api-alls.onrender.com/applications';

  applyJob(application: Application): Observable<Application> {
    return this.http.post<Application>(this.api, application);
  }

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.api);
  }

  deleteApplication(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}