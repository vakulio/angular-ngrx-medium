import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LoginComponent } from './src/app/auth/components/login/login.component';
import { TopbarComponent } from './shared/topbar/topbar.component';
import { PersistanceService } from './services/persistance.service';
import { AuthInterceptor } from './interceptors/auth-interceptor.interceptor';
import { GlobalFeedModule } from './global-feed/global-feed.module';
import { YourFeedModule } from './your-feed/your-feed.module';
import { TagFeedModule } from './tag-feed/tag-feed.module';
@NgModule({
  declarations: [AppComponent, LoginComponent],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    StoreModule.forRoot({ router: routerReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreRouterConnectingModule.forRoot(),
    TopbarComponent,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
  ],
})
export class AppModule {}
