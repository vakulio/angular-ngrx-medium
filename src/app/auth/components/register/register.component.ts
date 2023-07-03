import { Component, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { registerAction } from 'src/app/store/actions/register.action';
import { isSubmittingSelector } from 'src/app/store/selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(private _fb: FormBuilder, private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  initializeForm(): void {
    this.form = this._fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: [
        '',
        Validators.pattern(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
        ),
      ],
    });
  }

  onSumbit(): void {
    this.store.dispatch(registerAction(this.form.value));
    this.authService.register(this.form.value).subscribe({
      next: (user: ICurrentUser) => console.log(user),
      error: (err) => console.log(err)
    })
  }
}
