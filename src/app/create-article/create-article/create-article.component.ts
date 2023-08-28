import { Component, OnInit, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IArticleInput } from 'src/app/shared/types/articleInput.interface';
import { IBackendErr } from 'src/app/shared/types/backendErrors';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../store/selectors';
import { createArticleAction } from '../store/actions/createArticle.action';

@Component({
  selector: 'mcrx-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  initialValues: IArticleInput = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErr | null>;
  private _store = inject(Store);

  ngOnInit(): void {
    this.isSubmitting$ = this._store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this._store.pipe(select(validationErrorsSelector));
  }

  onSubmit(articleInput: IArticleInput) {
    this._store.dispatch(createArticleAction({ articleInput }));
  }
}
