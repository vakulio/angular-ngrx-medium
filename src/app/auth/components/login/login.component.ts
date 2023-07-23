import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { IBackendErr } from 'src/app/shared/types/backendErrors';
import { ILogReq } from 'src/app/shared/types/loginReq.interface';
import { loginAction } from 'src/app/store/actions/login.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/store/selectors';

@Component({
  selector: 'mcrx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErr | null>;

  constructor(
    private _fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  initializeForm(): void {
    this.form = this._fb.group({
      email: [''],
      password: [''],
    });
  }

  onSumbit(): void {
    const request: ILogReq = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
