import { Injectable } from '@angular/core';
import { Room } from '../models/site.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomsApiService {
  constructor(private readonly http: HttpClient) {}

  public getAll(): Observable<Room[]> {
    return this.http.get<Room[]>('http://localhost:8000/rooms');
  }

  public getOne(roomId: number): Observable<Room | null> {
    return this.http
      .get<Room | null>(`http://localhost:8000/rooms/${roomId}`)
      .pipe();
  }
}
