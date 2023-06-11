import { Injectable } from '@angular/core';
import { Site } from '../models/site.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SitesApiService {
  constructor(private readonly http: HttpClient) {}

  public getAll(): Observable<Site[]> {
    return this.http.get<Site[]>('http://localhost:8000/sites');
  }

  public getOne(siteId: number): Observable<Site | null> {
    return this.http.get<Site[]>('http://localhost:8000/sites').pipe(
      map((sites) => {
        return sites.find((site) => site.id === siteId) ?? null;
      })
    );
  }
}
