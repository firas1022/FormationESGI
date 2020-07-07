import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'observable-pipe-course-project';
  user1Activated = false;
  user2Activated = false;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.activated.subscribe((id: number) => {
      if (id === 1) {
        this.user1Activated = !this.user1Activated;
      }
      if (id === 2) {
        this.user2Activated = !this.user2Activated;
      }
    });
  }
}
