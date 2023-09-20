import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from '../shared/backend-error-messages/backend-error-messages.component';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from '../store/actions/register.effect';
import { LoginEffect } from '../store/actions/login.effect';
import { LoginComponent } from './components/login/login.component';
import { GetCurrentUserEffect } from '../store/actions/getCurrentUser.effect';
import { UpdateCurrentUserEffect } from '../store/actions/updateCurrentUser.effect';
import { LogoutEffect } from '../store/actions/logout.effect';

const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forRoot([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
      UpdateCurrentUserEffect,
      LogoutEffect,
    ]),
    BackendErrorMessagesComponent,
  ],
  providers: [AuthService],
})
export class AuthModule {}
