import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from './store/actions/getCurrentUser.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  store = inject(Store)

  ngOnInit(): void {
      this.store.dispatch(getCurrentUserAction())
  }
}
