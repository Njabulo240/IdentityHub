import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CollapseModule.forRoot(),
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class MenuModule { }
