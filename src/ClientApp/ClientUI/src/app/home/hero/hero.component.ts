import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  details = {
    title: "Identity Hub",
    subTitle: "Your central platform for managing user identities and authentication.",
    description: "Identity Hub provides a secure and scalable solution for handling user accounts, authentication, and authorization across your applications.",
    features: [
      "User Registration and Login",
      "Password Recovery and Reset",
      "Role-Based Access Control",
      "Two-Factor Authentication",
      "Single Sign-On (SSO)",
      "OAuth2 and OpenID Connect Integration",
      "Social Media Login",
      "Token Refresh"
    ],
    documentationLink: "https://yourappdocumentationlink.com",
    supportLink: "https://yourappsupportlink.com",
    socialMediaLinks: {
      facebook: "https://facebook.com/yourapp",
      google: "https://accounts.google.com/yourapp",
      twitter: "https://twitter.com/yourapp"
    },
    tokenRefreshInfo: "Tokens are refreshed automatically upon expiration to ensure a seamless user experience."
  };

  constructor() { }

  ngOnInit() {
  }

}
