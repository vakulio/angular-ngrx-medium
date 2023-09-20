import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription, combineLatest, filter, map } from 'rxjs';
import { IAuthor } from 'src/app/shared/types/author.interface';
import { getUserProfileAction } from '../store/actions/getUserProfile.action';
import { ActivatedRoute, Router } from '@angular/router';
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from '../store/selectors';
import { currentUserSelector } from 'src/app/store/selectors';

@Component({
  selector: 'mcrx-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);

  userProfile: IAuthor;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  userProfileSubscription: Subscription;
  slug: string;
  isCurrentUserProfile$: Observable<boolean>;

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  }

  ngOnDestroy(): void {
    this.userProfileSubscription.unsubscribe();
  }

  initializeValues(): void {
    this.slug = this._route.snapshot.params['slug'];
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.error$ = this._store.pipe(select(errorSelector));
    this.isCurrentUserProfile$ = combineLatest([
      this._store.pipe(select(currentUserSelector), filter(Boolean)),
      this._store.pipe(select(userProfileSelector), filter(Boolean)),
    ]).pipe(
      map(
        ([currentUser, userProfile]) =>
          currentUser.username === userProfile.username
      )
    );
    this._route.params.subscribe(params => {
      this.slug = params['slug'];
      this.fetchData();
    });
  }

  getAPIUrl(): string {
    const isFavorites = this._router.url.includes('favorites');
    const apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`;
    return apiUrl;
  }

  initializeListeners(): void {
    this.userProfileSubscription = this._store
      .pipe(select(userProfileSelector))
      .subscribe(user => {
        this.userProfile = user;
      });
  }

  fetchData(): void {
    this._store.dispatch(getUserProfileAction({ slug: this.slug }));
  }
}
