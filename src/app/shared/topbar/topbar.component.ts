import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from './../../store/selectors';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ICurrentUser } from '../types/currentUser.interface';
import { Store, select } from '@ngrx/store';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'mcrx-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf, AsyncPipe],
})
export class TopbarComponent implements OnInit {
  private _store = inject(Store);
  isLoggedIn$: Observable<boolean>;
  isAnonymous$: Observable<boolean>;
  currentUser$: Observable<ICurrentUser | null>;

  ngOnInit(): void {
    this.isLoggedIn$ = this._store.pipe(select(isLoggedInSelector));
    this.isAnonymous$ = this._store.pipe(select(isAnonymousSelector));
    this.currentUser$ = this._store.pipe(select(currentUserSelector));
  }
}
