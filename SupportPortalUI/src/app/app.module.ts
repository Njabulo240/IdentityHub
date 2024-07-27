import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [	
    AppComponent,
      NotFoundComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
