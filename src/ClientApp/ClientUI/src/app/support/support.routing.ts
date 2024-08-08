import { Routes, RouterModule } from '@angular/router';
import { SupportComponent } from './support.component';
import { AdminGuard } from '../shared/guards/admin.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AdminGuard],
    children: [
      { path: '', component: SupportComponent},
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class SupportRoutes { }
