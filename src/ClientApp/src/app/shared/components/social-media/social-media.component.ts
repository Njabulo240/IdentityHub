import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  socialMediaLinks = {

    github: "https://github.com/Njabulo240",
    linkedin: "https://www.linkedin.com/in/njabulo-mamba-531754227/",
    gmail: "njebzeliny@gmail.com",
    facebook: "https://www.facebook.com/njabulonjebs.mamba/"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
