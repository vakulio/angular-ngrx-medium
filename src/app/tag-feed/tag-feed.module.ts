import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from '../shared/feed/feed.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { PopularTagsModule } from '../popular-tags/popular-tags.module';
import { PopularTagsComponent } from '../popular-tags/popular-tags/popular-tags.component';
import { FeedTogglerComponent } from '../shared/feed-toggler/feed-toggler.component';
import { TagFeedComponent } from './tag-feed/tag-feed.component';

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
  },
];

@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    BannerComponent,
    RouterModule.forChild(routes),
    FeedComponent,
    PopularTagsModule,
    PopularTagsComponent,
    FeedTogglerComponent,
  ],
})
export class TagFeedModule {}
