import { Component, Input, OnInit, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFeedAction } from 'src/app/global-feed/store/actions/getFeed.action';
import { IGetFeedRes } from '../types/article.interface';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/global-feed/store/selectors';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mcrx-feed[apiUrl]',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  standalone: true,
  imports: [NgIf, AsyncPipe, NgFor, RouterLink],
})
export class FeedComponent implements OnInit {
  @Input({
    required: true,
    alias: 'apiUrl',
  })
  apiUrlProps: string;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  data$: Observable<IGetFeedRes | null>;

  private store = inject(Store);

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.data$ = this.store.pipe(select(feedSelector));
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
