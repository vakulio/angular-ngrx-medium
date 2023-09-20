import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { followUserAction } from './store/actions/addToFollow.action';

@Component({
  selector: 'mcrx-follow-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './follow-user.component.html',
  styleUrls: ['./follow-user.component.scss'],
})
export class FollowUserComponent implements OnInit {
  @Input() isFollowed: boolean;
  @Input() userSlug: string;
  private store = inject(Store);

  isFollowedValue: boolean;

  ngOnInit(): void {
    this.isFollowedValue = this.isFollowed;
  }

  handleFollow() {
    this.isFollowedValue = !this.isFollowedValue;
    this.store.dispatch(
      followUserAction({
        isFollowed: this.isFollowedValue,
        slug: this.userSlug,
      })
    );
  }
}
