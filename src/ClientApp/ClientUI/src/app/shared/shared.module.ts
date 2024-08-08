import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';
import { ValidationMessagesComponent } from './components/errors/validation-messages/validation-messages.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NotificationComponent } from './components/modals/notification/notification.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UserHasRoleDirective } from './directives/user-has-role.directive';
import { SocialMediaComponent } from './components/social-media/social-media.component';


@NgModule({ declarations: [
        NotFoundComponent,
        ValidationMessagesComponent,
        NotificationComponent,
        UserHasRoleDirective,
        SocialMediaComponent
    ],
    exports: [
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        ValidationMessagesComponent,
        UserHasRoleDirective,
        SocialMediaComponent
    ], imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        ModalModule.forRoot()], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedModule { }
