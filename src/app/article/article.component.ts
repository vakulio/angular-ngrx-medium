import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getArticleAction } from './store/actions/getArticle.action';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../shared/types/getFeedRes.interface';
import { Observable, Subscription, combineLatest, map } from 'rxjs';
import {
  articleSelector,
  isLoadingSelector,
  errorSelector,
} from './store/selectors';
import { currentUserSelector } from '../store/selectors';
import { deleteArticleAction } from './store/actions/deleteArticle.action';

@Component({
  selector: 'mcrx-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string;
  article: IArticle | null;
  articleSubsciption: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  isAuthor$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initListeners();
    this.initValues();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.articleSubsciption.unsubscribe();
  }

  initValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ).pipe(
      map(([art, currentUser]: [IArticle | null, ICurrentUser | null]) => {
        if (!art || !currentUser) return false;
        return currentUser.username === art.author.username;
      })
    );
  }

  initListeners(): void {
    this.articleSubsciption = this.store
      .pipe(select(articleSelector))
      .subscribe((article: IArticle | null) => {
        this.article = article;
      });
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({ slug: this.slug }));
  }
}
