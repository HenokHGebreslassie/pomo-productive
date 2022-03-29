import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { BASE_URL} from "../constants/config";
import {StorageService} from "./storage.service";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private httpClient : HttpClient) {
  }

  createTask(data: object) : Observable<any> {
    return this.httpClient.post(`${BASE_URL}/tasks`, data)
  }

  getTasks() : Observable<any> {
    return this.httpClient.get(`${BASE_URL}/tasks`)
  }
  markTaskDone(data: object, taskId: string) : Observable<any> {
    return this.httpClient.patch(`${BASE_URL}/tasks/${taskId}`, data)
  }

  deleteTask(taskId:string) : Observable<any> {
    return this.httpClient.delete(`${BASE_URL}/tasks/${taskId}`)
  }
}
