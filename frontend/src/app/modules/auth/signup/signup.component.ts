import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {map, Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {SignupService} from "./signup.service";
import {store} from "../../../store/store";
import {storeUser} from "../../../store/actions";
import {EmailValidator} from "./EmailValidator";
import {User} from "../../../models/user";
import {TokenService} from "../../../services/token.service";

@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  registrationForm!: FormGroup ;
  errors :any;
  private subscription: Subscription | undefined;


  constructor(private formBuilder : FormBuilder,
              private signUpService: SignupService,
              private router : Router,
              private tokenService: TokenService,
              private userService: UserService
  ) {

      this.registrationForm = this.formBuilder.group({
        password: [null, [Validators.minLength(3), Validators.required]],
        email: [
          null,
          [Validators.minLength(3), Validators.required, Validators.email],
          [EmailValidator.createValidator(this.signUpService)],
        ],
        firstname:[null, Validators.required],
        lastname:[null, Validators.required]
    });
  }

  ngOnInit(): void {
  }
  onSubmit() {

    this.subscription = this.signUpService.signUp(this.registrationForm.value)
      .subscribe((resp)=> {
      this.getUserFromToken(resp);
    }, error => this.errors = error);

  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }

  getUserFromToken(data: {token:string, user:object}): void {
    try{
      const token = data.token
      this.tokenService.saveToken(token)
      this.userService.setLoggedInUser(data.user)
      const user = User.createUserFromObject(data.user)
      store.dispatch(storeUser(user))
      if(token) this.router.navigate(['dashboard'])
    } catch (err) {
      console.log(err)
    }
  }

}
