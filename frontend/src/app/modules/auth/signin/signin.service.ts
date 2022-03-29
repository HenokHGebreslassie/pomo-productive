import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BASE_URL} from "../../../constants/config";

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private httpClient: HttpClient) { }

  signin(user:{email: string, password: string}) : Observable<any> {
    return this.httpClient.post(`${BASE_URL}/auth/signin`, user)
  }
}
