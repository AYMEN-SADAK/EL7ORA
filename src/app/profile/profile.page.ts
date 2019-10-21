import { Component, OnInit } from '@angular/core';
import {AllService} from '../all.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

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
