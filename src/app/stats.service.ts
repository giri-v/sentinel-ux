import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }

  getStats() {
    return this.http.get('http://camdrive:20080/stat/', { observe:'response', responseType: 'text'});
  }
}
