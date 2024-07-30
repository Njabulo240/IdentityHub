import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroComponent } from './hero/hero.component';
import { BlogComponent } from './blog/blog.component';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MenuModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }

    ])
  ],
  declarations: [ 
    HomeComponent,
    HeroComponent,
    BlogComponent,
    
  ]
})
export class HomeModule { }
