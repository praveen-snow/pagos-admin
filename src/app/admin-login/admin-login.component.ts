import { Component, OnInit } from '@angular/core';
import { retryWhen } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router, private api: ApiService) { }
  userName: string = '';
  password: string = '';
  ngOnInit() {
    this.api.logout();
  }

  changeInModelValue(value, prop) {
    console.log(value, prop);
    if (prop === 'user') {
      this.userName = value;
    } else if (prop === 'password') {
      this.password = value;
    }
  }

  authenticate() {
    const req: any = {};
    req.username = this.userName;
    req.password = this.password;
    this.api.authenticate(req)
      .subscribe(user => {
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate(['/products']);
        }

      }, (err) => {
        console.log(err);
      });
  }

}
