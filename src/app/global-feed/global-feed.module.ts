import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainFeedComponent,
  },
];

@NgModule({
  declarations: [MainFeedComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class GlobalFeedModule {}
