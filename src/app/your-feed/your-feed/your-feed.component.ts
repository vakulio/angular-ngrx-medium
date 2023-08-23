import { Component } from '@angular/core';

@Component({
  selector: 'mcrx-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.scss'],
})
export class YourFeedComponent {
  apiUrl = '/articles/feed';
}
