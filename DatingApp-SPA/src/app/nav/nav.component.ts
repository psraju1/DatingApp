import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  constructor(private authServie: AuthService) { }

  ngOnInit() {
  }

  login (){
      console.log(this.model);
      this.authServie.login(this.model).subscribe(next => {
        console.log('Logged in successfully');
      }, error => {
        console.log('Failed to login');
      });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  logOut(){
    localStorage.removeItem('token');
  }

}