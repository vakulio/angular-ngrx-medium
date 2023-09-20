import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getFeedAction } from 'src/app/global-feed/store/actions/getFeed.action';
import { IGetFeedRes } from '../types/article.interface';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/global-feed/store/selectors';
import { AsyncPipe, DatePipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { LoadingComponent } from '../loading/loading.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { environment } from 'src/environments/environment.development';
import queryString from 'query-string';
import { TaglistComponent } from '../taglist/taglist.component';
import { AddToFavoritesComponent } from '../add-to-favorites/add-to-favorites.component';

@Component({
  selector: 'mcrx-feed[apiUrl]',
  templateUrl: './feed.component.html',
  styles: [],
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NgFor,
    RouterLink,
    ErrorMessageComponent,
    LoadingComponent,
    PaginationComponent,
    DatePipe,
    TaglistComponent,
    AddToFavoritesComponent,
  ],
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input({
    required: true,
    alias: 'apiUrl',
  })
  apiUrlProps: string;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  data$: Observable<IGetFeedRes | null>;
  private store = inject(Store);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  limit = environment.limit;
  baseUrl = '';
  queryParamsSubscription: Subscription;
  currentPage: number;

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
    this.fetchData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChaged =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !==
        changes['apiUrlProps'].previousValue;
    if (isApiUrlChaged) {
      this.fetchData();
    }
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe();
  }

  initializeListeners() {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || 1);
        this.fetchData();
      }
    );
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.data$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  fetchData(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = queryString.parseUrl(this.apiUrlProps);
    const stringifiedUrl = queryString.stringifyUrl({
      url: parsedUrl.url,
      query: { ...parsedUrl.query, offset, limit: this.limit },
    });
    this.store.dispatch(getFeedAction({ url: stringifiedUrl }));
  }
}
