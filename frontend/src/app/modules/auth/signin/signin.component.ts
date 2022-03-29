import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {TokenService} from "../../../services/token.service";
import {SigninService} from "./signin.service";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import {store} from "../../../store/store";
import {storeUser} from "../../../store/actions";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  errors: any;

  singInForm:FormGroup
  constructor(private formBuilder:FormBuilder,
              private router: Router,
              private tokenService: TokenService,
              private signInService: SigninService,
              private userService : UserService) {
    this.singInForm = this.formBuilder.group({
      email:['', Validators.compose([Validators.required, Validators.email])],
      password : ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  signIn() {
    const email:string = this.singInForm.get('email')!.value
    const password:string = this.singInForm.get('password')!.value

    this.signInService.signin({email, password}).subscribe((response) => {
      this.getUserFromToken(response)
    })
  }

  setFormData(data:any) {
    this.singInForm.get(data.name)?.patchValue(data.value)
  }

  getUserFromToken(data: {accessToken:string, user:object}): void {
    try{
      const accessToken = data.accessToken
      this.tokenService.saveToken(accessToken)
      this.userService.setLoggedInUser(data.user)
      const user = User.createUserFromObject(data.user)
      store.dispatch(storeUser(user))
      if(accessToken) this.router.navigate(['dashboard'])
    } catch (err) {
      console.log(err)
    }
  }

}
