import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PlayComponent } from './play/play.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { MenuModule } from './menu/menu.module';
import { HomeModule } from './home/home.module';
import { MessageService } from './shared/service/message.service';
import { ContactComponent } from './contact/contact.component';
import { FacebookService } from './shared/service/facebook.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './shared/core/loading.interceptor';

export function initializeFacebookSdk(facebookSdkService: FacebookService) {
  return () => facebookSdkService.loadSdk();
}
@NgModule({
  declarations: [	
    AppComponent,
    PlayComponent,
    ContactComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MenuModule,
    HomeModule,
    NgxSpinnerModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {
      provide: APP_INITIALIZER,useFactory: initializeFacebookSdk,deps: [FacebookService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
