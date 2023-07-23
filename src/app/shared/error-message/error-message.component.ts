import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mcrx-error-message',
  standalone: true,
  imports: [CommonModule],
  template: `<div>{{ messageProps }}</div>`,
  styles: [],
})
export class ErrorMessageComponent {
  @Input() messageProps = 'Something went wrong';
}
