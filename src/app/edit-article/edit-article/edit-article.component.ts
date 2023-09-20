import { Component, OnInit, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, filter, map } from 'rxjs';
import { IArticleInput } from 'src/app/shared/types/articleInput.interface';
import { IBackendErr } from 'src/app/shared/types/backendErrors';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors';
import { ActivatedRoute } from '@angular/router';
import { getArticleAction } from '../store/actions/getArticle.action';
import { articleSelector } from 'src/app/article/store/selectors';
import { IArticle } from 'src/app/shared/types/getFeedRes.interface';
import { updateArticleAction } from '../store/actions/editArticle.action';

@Component({
  selector: 'mcrx-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initializeValues$: Observable<IArticleInput>;
  isLoading$: Observable<boolean>;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErr | null>;
  slug: string;
  private _store = inject(Store);
  private _route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this._route.snapshot.params['slug'];
    this.isSubmitting$ = this._store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this._store.pipe(select(validationErrorsSelector));
    this.initializeValues$ = this._store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: IArticle) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }

  fetchData(): void {
    this._store.dispatch(getArticleAction({ slug: this.slug }));
  }

  onSubmit(articleInput: IArticleInput) {
    this._store.dispatch(
      updateArticleAction({ slug: this.slug, articleInput })
    );
  }
}
