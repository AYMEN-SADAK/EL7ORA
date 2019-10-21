import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {AllService} from '../all.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

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
