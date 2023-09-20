import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticleFormComponent } from '../shared/article-form/article-form.component';
import { EditArticleService } from './services/edit-article.service';
import { EffectsModule } from '@ngrx/effects';
import { updateArticleEffect } from './store/actions/editArticle.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { ArticleService } from '../services/article.service';
import { getArticleEffect } from './store/actions/getArticle.effect';
import { LoadingComponent } from '../shared/loading/loading.component';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormComponent,
    EffectsModule.forFeature([updateArticleEffect, getArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingComponent,
  ],
  providers: [EditArticleService, ArticleService],
})
export class EditArticleModule {}
