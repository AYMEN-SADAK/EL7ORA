import { Component, OnInit } from '@angular/core';
import {AllService} from '../all.service';

@Component({
  selector: 'app-boite',
  templateUrl: './boite.page.html',
  styleUrls: ['./boite.page.scss'],
})
export class BoitePage implements OnInit {

  Lang;

  constructor(private all: AllService ) { }

  ngOnInit() {
    this.Lang = localStorage.getItem('langue');
  }

  change(lang: string) {
    this.Lang = lang;
    localStorage.setItem('langue', lang);
  }
}
