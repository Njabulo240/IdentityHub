import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import jwt_decode from 'jwt-decode';

@Directive({
  selector: '[appUserHasRole]'
})
export class UserHasRoleDirective implements OnInit{
  @Input() appUserHasRole: string[] = [];

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.user$.pipe(take(1)).subscribe({
      next: user => {
        if (user) {
          try {
            const decodedToken: any = jwt_decode(user.jwt);

            // Ensure `decodedToken.role` is an array
            const roles: string[] = Array.isArray(decodedToken.role) ? decodedToken.role : [];

            if (roles.some(role => this.appUserHasRole.includes(role))) {
              this.viewContainerRef.createEmbeddedView(this.templateRef);
            } else {
              this.viewContainerRef.clear();
            }
          } catch (error) {
            console.error('Error decoding token:', error);
            this.viewContainerRef.clear();
          }
        } else {
          this.viewContainerRef.clear();
        }
      }
    });
  }
}
