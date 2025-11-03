import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Series } from './series';

@Injectable({
  providedIn: 'root',
})
export class SeriesService implements OnInit {
  private apiUrl: string = environment.baseUrl + 'series.json';
  constructor(private http: HttpClient) { }

  getSeries(): Observable<Series[]> {
   return this.http.get<Series[]>(this.apiUrl);
 }

 ngOnInit(): void {
    this.getSeries();
  }
}
