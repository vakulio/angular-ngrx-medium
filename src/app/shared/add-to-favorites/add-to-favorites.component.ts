import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  favoritesCountValue: number;
  isFavoritedValue: boolean;

  ngOnInit(): void {
    this.favoritesCountValue = this.favoritesCount;
    this.isFavoritedValue = this.isFavorited;
  }

  handleLike() {
    if (this.isFavoritedValue) {
      this.favoritesCountValue--;
    } else {
      this.favoritesCountValue++;
    }
    this.isFavoritedValue = !this.isFavoritedValue;
  }
}
