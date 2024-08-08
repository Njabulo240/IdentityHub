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
   description: "Built using ASP.NET and Angular, provides a secure and scalable solution for handling user accounts, authentication, and authorization across your applications.",
    features: [
      "User Registration and Login",
      "Password Recovery and Reset",
      "Role-Based Access Control",
      "Single Sign-On (SSO)",
      "OAuth2 Integration",
      "OpenID Connect Integration",
      "Social Media Login",
      "Token Refresh",
      "Email Integration",
      "Entity Framework Core with SQL Server",
      "API Documentation with Swagger"
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
