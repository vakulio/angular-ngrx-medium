import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToFavoritesAction } from './store/actions/addToFavorites.action';

@Component({
  selector: 'mcrx-add-to-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss'],
})
export class AddToFavoritesComponent implements OnInit {
  @Input() isFavorited: boolean;
  @Input() favoritesCount: number;
  @Input() articleSlug: string;
  private store = inject(Store);

  favoritesCountValue: number;
  isFavoritedValue: boolean;

  ngOnInit(): void {
    this.favoritesCountValue = this.favoritesCount;
    this.isFavoritedValue = this.isFavorited;
  }

  handleLike() {
    this.store.dispatch(
      addToFavoritesAction({
        isFavorited: this.isFavorited,
        slug: this.articleSlug,
      })
    );
    if (this.isFavoritedValue) {
      this.favoritesCountValue--;
    } else {
      this.favoritesCountValue++;
    }
    this.isFavoritedValue = !this.isFavoritedValue;
  }
}
