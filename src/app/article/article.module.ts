import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from '../shared/feed/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { BannerComponent } from '../shared/banner/banner.component';
import { PopularTagsModule } from '../popular-tags/popular-tags.module';
import { PopularTagsComponent } from '../popular-tags/popular-tags/popular-tags.component';
import { FeedTogglerComponent } from '../shared/feed-toggler/feed-toggler.component';
import { ArticleComponent } from './article.component';
import { GetArticleEffect } from './store/actions/getArticle.effect';
import { LoadingComponent } from '../shared/loading/loading.component';
import { ErrorMessageComponent } from '../shared/error-message/error-message.component';
import { TaglistComponent } from '../shared/taglist/taglist.component';
import { ArticleService } from './article.service';
import { deleteArticleEffect } from './store/actions/deleteArticle.effect';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    BannerComponent,
    RouterModule.forChild(routes),
    FeedComponent,
    EffectsModule.forFeature([GetArticleEffect, deleteArticleEffect]),
    StoreModule.forFeature('article', reducers),
    PopularTagsModule,
    PopularTagsComponent,
    FeedTogglerComponent,
    LoadingComponent,
    ErrorMessageComponent,
    TaglistComponent,
  ],
  providers: [ArticleService],
})
export class ArticleModule {}
