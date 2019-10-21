import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {AllService} from '../all.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {

  constructor(private auth: AuthService, private all: AllService) { }
Lang;
  ngOnInit() {
    this.Lang = localStorage.getItem('langue');
  }


onSubmit(f: NgForm) {
    const name = f.value.name;
    const sname = f.value.sname;
    const cin = f.value.cin;
    const city = f.value.city;

  }
}
