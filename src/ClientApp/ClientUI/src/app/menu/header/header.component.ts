import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() dark: boolean = false;
  @Input() sticky: boolean = false;
  @Input() absolute: boolean = false;
  collapsed = true;

  constructor(public accountService: AccountService) { }

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  ngOnInit(): void {}

  logout() {
    this.accountService.logout();
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }
}
