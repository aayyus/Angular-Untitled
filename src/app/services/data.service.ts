import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  private apiUrl = 'http://your-api-url/data.json'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  saveData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
