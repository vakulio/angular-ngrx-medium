import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { UtilsService } from 'src/app/services/utils.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mcrx-pagination',
  standalone: true,
  imports: [NgFor, RouterLink, CommonModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() total: number;
  @Input() limit: number;
  @Input() url: string;
  @Input() currentPage: number;
  private utils = inject(UtilsService);
  pagesCount: number;
  pages: number[];

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.utils.range(1, this.pagesCount);
  }
}
