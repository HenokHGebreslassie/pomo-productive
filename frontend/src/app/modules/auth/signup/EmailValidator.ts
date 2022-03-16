
import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {SignupService} from "./signup.service";


export class EmailValidator {

  static  createValidator(signUpService: SignupService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> | Observable<any> => {
      return signUpService
        .checkEmail(control.value)
        .pipe(
          map((result: any) =>
            {
              return result ? { emailAlreadyExists: true } : null
            }
          )
        );
    };
  }
}

