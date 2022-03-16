import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../../models/user";
import {map, Observable} from "rxjs";
import {BASE_URL} from "../../../constants/config";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private httpClient : HttpClient) { }

  signUp(user:User ) : Observable<any> {
    return this.httpClient.post(`${BASE_URL}/auth/signup`, user)
  }
  checkEmail(email:string) : Observable<any> {
    return this.httpClient.get(`${BASE_URL}/auth/checkEmailExists?email=${email}`)
      .pipe(map(({data} : any) => (data.emailExists ? data : null)))
  }
}
