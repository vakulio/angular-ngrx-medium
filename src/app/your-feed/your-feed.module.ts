import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './your-feed/your-feed.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from '../shared/feed/feed.component';
import { EffectsModule } from '@ngrx/effects';
import { GetFeedEffect } from './store/actions/getFeed.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { BannerComponent } from '../shared/banner/banner.component';
import { PopularTagsModule } from '../popular-tags/popular-tags.module';
import { PopularTagsComponent } from '../popular-tags/popular-tags/popular-tags.component';
import { FeedTogglerComponent } from '../shared/feed-toggler/feed-toggler.component';

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
  },
];

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    BannerComponent,
    RouterModule.forChild(routes),
    FeedComponent,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    PopularTagsModule,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class YourFeedModule {}
