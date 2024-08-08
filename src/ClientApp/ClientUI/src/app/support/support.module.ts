import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { SupportRoutes } from './support.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    SupportRoutes,
    FormsModule 
  ],
  declarations: [SupportComponent]
})
export class SupportModule { }
