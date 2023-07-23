import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mcrx-loading',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="loading-container">
    <div class="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>`,
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {}
