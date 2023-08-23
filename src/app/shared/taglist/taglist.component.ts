import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopularTagType } from '../types/tags.interface';

@Component({
  selector: 'mcrx-taglist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.scss'],
})
export class TaglistComponent {
  @Input() tagsProps: PopularTagType[];
}
