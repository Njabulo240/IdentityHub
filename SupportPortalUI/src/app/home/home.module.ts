import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ 
    HomeComponent,
    HeroComponent,
    SponsorsComponent,
    BlogComponent
  ]
})
export class HomeModule { }
