import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
//import { TASKS } from '../mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private API_URL = 'http://localhost:5000/tasks';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API_URL); // Gatting Observable data from a fake database (json-server package)
    //return of(TASKS); // Use 'of' to turn the data into the Observable object. Getting Observable data from a static file
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.API_URL}/${task.id}`;
    
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.API_URL}/${task.id}`;
    
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task):Observable<Task>{
    return this.http.post<Task>(this.API_URL, task, httpOptions);
  }
}
