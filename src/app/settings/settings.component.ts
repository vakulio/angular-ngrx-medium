import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {
  ICurrentUser,
  ICurrentUserInput,
} from '../shared/types/currentUser.interface';
import { Observable, Subscription, filter } from 'rxjs';
import { currentUserSelector } from '../store/selectors';
import { IBackendErr } from '../shared/types/backendErrors';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from './store/selectors';
import { updateCurrentUserAction } from '../store/actions/updateCurrentUser.action';
import { logoutAction } from '../store/actions/sync.action';

@Component({
  selector: 'mcrx-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  private _fb = inject(FormBuilder);
  private _store = inject(Store);

  currentUser: ICurrentUser;
  currentUserSubscription: Subscription;
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErr | null>;

  ngOnInit(): void {
    this.initializeLiseners();
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  initializeValues() {
    this.isSubmitting$ = this._store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this._store.pipe(select(validationErrorsSelector));
  }

  initializeLiseners(): void {
    this.currentUserSubscription = this._store
      .pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: ICurrentUser) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeForm(): void {
    this.form = this._fb.group({
      image: this.currentUser.image,
      username: this.currentUser.username,
      bio: this.currentUser.bio,
      email: this.currentUser.email,
      password: '',
    });
  }

  submit() {
    const currentUserInput: ICurrentUserInput = {
      ...this.currentUser,
      ...this.form.value,
    };
    this._store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }

  logout() {
    this._store.dispatch(logoutAction());
  }
}
