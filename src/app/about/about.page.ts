import { Component, OnInit } from '@angular/core';
import {AllService} from '../all.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  Lang;

  constructor(private all: AllService) { }

  ngOnInit() {
    this.Lang = localStorage.getItem('langue');
  }

  change(lang: string) {
    this.Lang = lang;
    localStorage.setItem('langue', lang);
  }
}
