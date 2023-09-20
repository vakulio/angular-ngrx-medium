import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileService } from './services/user-profile.service';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffect } from './store/actions/getUserProfile.effect';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { FeedComponent } from '../shared/feed/feed.component';
import { FollowUserComponent } from '../shared/follow-user/follow-user.component';
import { FollowUserEffect } from '../shared/follow-user/store/actions/addToFollow.effect';

const routes: Routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent,
  },
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    EffectsModule.forFeature([GetUserProfileEffect, FollowUserEffect]),
    StoreModule.forFeature('userProfile', reducers),
    FeedComponent,
    FollowUserComponent,
  ],
  providers: [UserProfileService],
})
export class UserProfileModule {}
