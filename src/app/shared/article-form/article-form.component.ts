import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IArticleInput } from '../types/articleInput.interface';
import { IBackendErr } from '../types/backendErrors';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesComponent } from '../backend-error-messages/backend-error-messages.component';

@Component({
  selector: 'mcrx-article-form[initialValues]',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BackendErrorMessagesComponent],
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  @Input() initialValues: IArticleInput;
  @Input() isSubmitting: boolean;
  @Input() errors: IBackendErr | null;
  @Output() articleSumbitEvent = new EventEmitter<IArticleInput>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      title: this.initialValues.title,
      description: this.initialValues.description,
      body: this.initialValues.body,
      tagList: this.initialValues.tagList.join(' '),
    });
  }

  onSubmit(): void {
    this.articleSumbitEvent.emit(this.form.value);
  }
}
