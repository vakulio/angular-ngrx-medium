import { Component, Input, OnInit } from '@angular/core';
import { IBackendErr } from '../types/backendErrors';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-backend-error-messages[backendErrors]',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorsProps: IBackendErr;

  errorMessages: string[]

  ngOnInit(): void {
      this.errorMessages = Object.keys(this.backendErrorsProps).map(key => {
          const message = this.backendErrorsProps[key]
          return `${key} ${message}`
        }
      )
  }
}
