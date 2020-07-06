import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  navigateToServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {editing: true}, fragment: 'loading'});
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
