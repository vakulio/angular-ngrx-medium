import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { getPopularTagAction } from '../store/actions/getPopularTags.action';
import { Observable } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/tags.interface';
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../store/selectors';
import { LoadingComponent } from 'src/app/shared/loading/loading.component';
import { ErrorMessageComponent } from 'src/app/shared/error-message/error-message.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mcrx-popular-tags',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ErrorMessageComponent, RouterLink],
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagAction());
  }
}
